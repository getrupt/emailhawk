import AccessToken from "../db/mongo/schemas/AccessToken";
import { generateRandomSecureToken } from "./EncryptionController";

export async function createAccessToken(user_id: string) {
  const accessToken = new AccessToken();
  accessToken.userId = user_id;
  accessToken.token = await generateRandomSecureToken();
  await accessToken.save();
  return accessToken;
}

export async function getAccessToken(token: string) {
  return await AccessToken.findOne({ token });
}

export async function deleteAccessTokenByUserId(user_id: string) {
  await AccessToken.deleteMany({ userId: user_id });
}
