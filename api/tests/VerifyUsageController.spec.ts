import dotenv from "dotenv";
dotenv.config();
// @ts-ignore
import { expect, beforeAll, afterAll, describe, it } from "bun:test";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import { chargeVerifyUsage } from "../controllers/VerifyUsageController";
import { register } from "../controllers/AuthController";

describe("VerifyUsageController", function () {
  beforeAll(async function () {
    await mongoose.connect(process.env.MONGO_URI);
  });
  afterAll(async function () {
    await mongoose.disconnect();
  });
  describe("chargeVerifyUsage", function () {
    it("should charge verify usage", async function () {
      const { project, verifyUsage } = await register(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        faker.internet.password()
      );
      expect(verifyUsage).toBeDefined();
      expect(verifyUsage.count).toBe(0);

      const chargedVerifyUsage = await chargeVerifyUsage({
        projectId: verifyUsage.projectId.toString(),
        stripeCustomerId: project.stripeCustomerId,
      });

      expect(chargedVerifyUsage).toBeDefined();
      expect(chargedVerifyUsage?.count).toBe(1);
    });
  });
});
