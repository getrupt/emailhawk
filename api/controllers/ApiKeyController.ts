import { generateRandomSecureToken } from "./EncryptionController";
import ApiKey from "../db/mongo/schemas/ApiKey";
import mongoose from "mongoose";

export async function createApiKey({
  projectId,
  name,
}: {
  projectId: string;
  name: string;
}) {
  const apiKey = new ApiKey();
  apiKey.name = name;
  apiKey.key = await generateRandomSecureToken();
  apiKey.projectId = new mongoose.Types.ObjectId(projectId);
  await apiKey.save();
  return apiKey;
}

export async function getApiKeysByProjectId(projectId: string) {
  return await ApiKey.find({ projectId });
}

export async function getApiKeyById(apiKeyId: string) {
  return await ApiKey.findById(apiKeyId);
}

export async function getApiKeyByIdAndProjectId(
  apiKeyId: string,
  projectId: string
) {
  return await ApiKey.findOne({ _id: apiKeyId, projectId });
}

export async function activateApiKey(apiKeyId: string, active: boolean) {
  return await ApiKey.findByIdAndUpdate(apiKeyId, { active });
}

export async function getApiKeyByKey(key: string) {
  return await ApiKey.findOne({ key });
}
