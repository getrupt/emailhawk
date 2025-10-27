import dotenv from "dotenv";
dotenv.config();
// @ts-ignore
import { expect, beforeAll, afterAll, describe, it } from "bun:test";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import { createVerification } from "../controllers/VerifyController";
import { register } from "../controllers/AuthController";
import { verifyEmailDomain } from "../controllers/EmailDomainController";

describe("VerifyController", function () {
  beforeAll(async function () {
    await mongoose.connect(process.env.MONGO_URI);
  });
  afterAll(async function () {
    await mongoose.disconnect();
  });
  describe("createVerification", function () {
    it("should create a verification", async function () {
      const { project, apiKey } = await register(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        faker.internet.password()
      );
      const email = faker.internet.email();
      const result = await verifyEmailDomain({
        email,
        timeout: 4000,
        forceSync: true,
      });
      const verification = await createVerification({
        projectId: project.id,
        apiKeyId: apiKey.id,
        email,
        domain: result.domain,
        mx_records: result.mx_records,
        disposable: result.disposable,
        webmail: result.webmail,
        status: result.status,
        regexp: result.regexp,
        smtp_server: result.smtp_server,
        smtp_check: result.smtp_check,
      });
      expect(verification).toBeDefined();
      expect(verification.projectId.toString()).toBe(project.id);
      expect(verification.apiKeyId.toString()).toBe(apiKey.id);
      expect(verification.email).toBe(email);
      expect(verification.domain).toBe(result.domain);
      expect(verification.mx_records).toBe(result.mx_records);
      expect(verification.disposable).toBe(result.disposable);
      expect(verification.webmail).toBe(result.webmail);
      expect(verification.status).toBe(result.status);
      expect(verification.regexp).toBe(result.regexp);
      expect(verification.smtp_server).toBe(result.smtp_server);
      expect(verification.smtp_check).toBe(result.smtp_check);
    });
  });
});
