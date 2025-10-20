import type mongoose from "mongoose";

export default interface VerifyUsage {
  id: string;
  projectId: mongoose.Types.ObjectId;
  count: number;
  periodStart: Date;
  periodEnd: Date;
  createdAt: Date | null;
  updatedAt: Date | null;
}
