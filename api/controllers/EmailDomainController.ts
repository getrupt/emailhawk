import { query, wellknown } from "dns-query";
import emailRegex from "email-regex";
import type IEmailDomain from "../models/EmailDomain";
import { EmailDomain } from "../db/mongo/schemas/EmailDomain";
import dayjs from "dayjs";
import type { Answer } from "@leichtgewicht/dns-packet";

const validateEmailDomainDefaultResponse = {
  status: "unknown",
  regexp: false,
  gibberish: false,
  disposable: false,
  webmail: false,
  mx_records: false,
  smtp_server: false,
  smtp_check: false,
  accept_all: false,
  block: false,
};

export const WebmailEmailDomainSources: {
  source: string;
  formatter: (data: Response) => Promise<string[]>;
}[] = [
  {
    source:
      "https://gist.githubusercontent.com/ammarshah/f5c2624d767f91a7cbdc4e54db8dd0bf/raw/660fd949eba09c0b86574d9d3aa0f2137161fc7c/all_email_provider_domains.txt",
    formatter: async (data: Response) => {
      const text = await data.text();
      return text.split("\n").filter((line) => line.trim() !== "");
    },
  },
];

export const DisposableEmailDomainSources: {
  source: string;
  formatter: (data: Response) => Promise<string[]>;
}[] = [
  {
    source:
      "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/disposable_email_blocklist.conf",
    formatter: async (data: Response) => {
      const text = await data.text();
      return text.split("\n").filter((line) => line.trim() !== "");
    },
  },
];

export async function updateEmailDomain({
  domain,
  data,
  noSync = false,
}: {
  domain: string;
  data: Partial<IEmailDomain>;
  noSync?: boolean;
}) {
  const emailDomain = await EmailDomain.findOneAndUpdate(
    { domain },
    {
      $setOnInsert: {
        domain,
      },
      $set: {
        ...data,
        syncedAt: noSync ? null : new Date(),
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
  return emailDomain;
}

export interface EmailDomainDNSRecords {
  answers: Answer[] | undefined;
  rcode: string | undefined;
}
export async function getEmailDomainDNSRecords({
  domain,
}: {
  domain: string;
}): Promise<EmailDomainDNSRecords | null> {
  try {
    const { answers, rcode } = await query(
      {
        question: { name: domain, type: "MX" },
      },
      {
        endpoints: wellknown.endpoints(),
      }
    );
    return {
      answers,
      rcode,
    };
  } catch (error) {
    return null;
  }
}

export async function importEmailDomainSource({
  source,
  formatter,
}: {
  source: string;
  formatter: (data: Response) => Promise<string[]>;
}) {
  const response = await fetch(source);
  return await formatter(response);
}

export async function syncEmailDomains() {
  for (const { source, formatter } of DisposableEmailDomainSources) {
    const result = await importEmailDomainSource({ source, formatter });
    for (const domain of result) {
      await EmailDomain.findOneAndUpdate(
        {
          domain,
        },
        {
          $set: {
            disposable: true,
            syncedAt: new Date(),
          },
        },
        {
          upsert: true,
        }
      );
    }
  }

  for (const { source, formatter } of WebmailEmailDomainSources) {
    const result = await importEmailDomainSource({ source, formatter });
    for (const domain of result) {
      await EmailDomain.findOneAndUpdate(
        {
          domain,
        },
        {
          $set: {
            webmail: true,
            syncedAt: new Date(),
          },
        },
        {
          upsert: true,
        }
      );
    }
  }
}

export function validateEmailFormat(email: string) {
  return emailRegex({ exact: true }).test(email);
}

export async function verifyEmailDomain({
  email,
  timeout = 4000,
  forceSync = false,
}: {
  email: string;
  timeout?: number;
  forceSync?: boolean;
}) {
  if (!validateEmailFormat(email)) {
    return {
      ...validateEmailDomainDefaultResponse,
      status: "invalid",
    }
  }

  const domain = email.split("@")[1];

  if (!domain) {
    return {
      ...validateEmailDomainDefaultResponse,
      status: "invalid",
    }
  }

  let emailDomain = await EmailDomain.findOne({ domain });

  if (
    !emailDomain ||
    !emailDomain.syncedAt ||
    dayjs(emailDomain.syncedAt).isBefore(dayjs().subtract(1, "month")) ||
    forceSync
  ) {
    try {
      const res: boolean = await Promise.race([
        new Promise<boolean>(async (resolve) => {
          const res = await getEmailDomainDNSRecords({ domain });
          if (res?.rcode === "NOERROR") {
            emailDomain = await updateEmailDomain({
              domain,
              data: { mx_records: true },
            });
          } else {
            console.error(
              "DNS lookup failed",
              domain,
              res ? res.rcode : "timed out"
            );
            throw new Error("DNS lookup failed");
          }
          resolve(true);
        }),
        new Promise<boolean>((resolve) => setTimeout(() => resolve(false), timeout)),
      ]);
      if (!res) {
        console.error("DNS lookup timed out", domain);
      }
    } catch (error) {
      emailDomain = await updateEmailDomain({
        domain,
        data: { mx_records: false },
        noSync: true,
      });
    }
  }

  if (!emailDomain) {
    return validateEmailDomainDefaultResponse;
  }

  let status = "valid";
  if (emailDomain.disposable) {
    status = "disposable";
  } else if (emailDomain.webmail) {
    status = "webmail";
  } else if (!emailDomain.mx_records) {
    status = "invalid";
  }

  return {
    ...validateEmailDomainDefaultResponse,
    status,
    regexp: true,
    disposable: emailDomain.disposable,
    webmail: emailDomain.webmail,
    mx_records: emailDomain.mx_records,
    smtp_server: emailDomain.mx_records,
    smtp_check: emailDomain.mx_records,
  };
}
