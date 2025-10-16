import type mongoose from "mongoose";

export default interface User {
  id: string;
  projectId: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}
