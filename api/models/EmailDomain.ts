export default interface EmailDomain {
  domain: string;
  mx_records: boolean;
  disposable: boolean;
  webmail: boolean;
  syncedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
