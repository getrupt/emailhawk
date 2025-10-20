import mongoose from "mongoose";
import type IEmailDomain from "../../../models/EmailDomain";

const emailDomainSchema = new mongoose.Schema(
  {
    domain: {
      type: String,
      required: true,
    },
    mx_records: {
      type: Boolean,
      default: false,
    },
    disposable: {
      type: Boolean,
      default: false,
    },
    webmail: {
      type: Boolean,
      default: false,
    },
    unknown: {
      type: Boolean,
      default: false,
    },
    syncedAt: {
      type: Date,
      default: null,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const EmailDomain = mongoose.model<IEmailDomain>("EmailDomain", emailDomainSchema);
