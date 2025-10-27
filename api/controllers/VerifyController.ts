import mongoose from "mongoose";
import { Verify } from "../db/mongo/schemas/Verify";

export async function getVerifications({
  projectId,
  page = 1,
  per = 10,
}: {
  projectId: string;
  page?: number;
  per?: number;
}) {
  console.log('projectId', projectId, page, per);
  return await Verify.find(
    {
      projectId: new mongoose.Types.ObjectId(projectId),
    },
    null,
    { limit: per, skip: (page - 1) * per, sort: { createdAt: -1 } }
  );
}

export async function createVerification({
  projectId,
  apiKeyId,
  email,
  domain,
  mx_records,
  disposable,
  webmail,
  status,
  regexp,
  smtp_server,
  smtp_check,
}: {
  projectId: string;
  apiKeyId: string;
  email: string;
  domain?: string;
  mx_records: boolean;
  disposable: boolean;
  webmail: boolean;
  status: string;
  regexp: boolean;
  smtp_server: boolean;
  smtp_check: boolean;
}) {
  const verify = new Verify();
  verify.projectId = new mongoose.Types.ObjectId(projectId);
  verify.apiKeyId = new mongoose.Types.ObjectId(apiKeyId);
  verify.email = email;
  verify.domain = domain;
  verify.mx_records = mx_records;
  verify.disposable = disposable;
  verify.webmail = webmail;
  verify.status = status;
  verify.regexp = regexp;
  verify.smtp_server = smtp_server;
  verify.smtp_check = smtp_check;
  await verify.save();
  return verify;
}
