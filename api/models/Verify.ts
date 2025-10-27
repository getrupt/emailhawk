import type mongoose from "mongoose";

export default interface Verify {
  id: string;
  projectId: mongoose.Types.ObjectId;
  apiKeyId: mongoose.Types.ObjectId;
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
