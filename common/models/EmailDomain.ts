export interface EmailDomain {
  domain: string;
  mx_records: boolean;
  disposable: boolean;
  webmail: boolean;
  unknown: boolean;
  syncedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
