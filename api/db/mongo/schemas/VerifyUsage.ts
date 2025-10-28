import mongoose from "mongoose";
import type IVerifyUsage from "../../../models/VerifyUsage";

const verifyUsageSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    count: { type: Number, default: 0 },
    periodStart: { type: Date, required: true },
    periodEnd: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IVerifyUsage>("VerifyUsage", verifyUsageSchema);
