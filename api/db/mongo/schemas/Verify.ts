import mongoose from "mongoose";
import type IVerify from "../../../models/Verify";

const verifySchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    apiKeyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApiKey",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    regexp: {
      type: Boolean,
      required: true,
    },
    smtp_server: {
      type: Boolean,
      required: true,
    },
    smtp_check: {
      type: Boolean,
      required: true,
    },
    mx_records: {
      type: Boolean,
      required: true,
    },
    disposable: {
      type: Boolean,
      required: true,
    },
    webmail: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Verify = mongoose.model<IVerify>("Verify", verifySchema);
