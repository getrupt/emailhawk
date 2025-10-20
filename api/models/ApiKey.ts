import mongoose from "mongoose";

export default interface ApiKey {
  id: string;
  name: string;
  key: string;
  projectId: mongoose.Types.ObjectId;
  active: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}
