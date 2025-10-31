export default interface EmailDomain {
  domain: string;
  mx_records: boolean;
  disposable: boolean;
  webmail: boolean;
  smtp_server: boolean;
  smtp_check: boolean;
  syncedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
