export default interface Verify {
  _id: string;
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
  createdAt: Date;
  updatedAt: Date;
}
