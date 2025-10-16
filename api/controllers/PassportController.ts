import { Strategy as BearerStrategy } from "passport-http-bearer";
import { getAccessToken } from "./AccessTokenController";
import { getUserById } from "./UserController";
import { getApiKeyByKey } from "./ApiKeyController";
import { getProjectById } from "./ProjectController";

export const passportBearerStrategy = new BearerStrategy(
  async (token, done) => {
    try {
      const access_token = await getAccessToken(token);
      if (!access_token || !access_token.userId) {
        return done(null, false);
      }
      const user = await getUserById(access_token.userId.toString());
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

export const passportApiKeyStrategy = new BearerStrategy(
  async (token, done) => {
    try {
      const apiKey = await getApiKeyByKey(token);
      if (!apiKey) {
        return done(null, false);
      }
      const project = await getProjectById(apiKey.projectId.toString());
      if (!project) {
        return done(null, false);
      }
      return done(null, project);
    } catch (err) {
      return done(err, null);
    }
  }
);
