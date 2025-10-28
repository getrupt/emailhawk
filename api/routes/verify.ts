import { Router } from "express";
import type { Request, Response } from "express";
import { expressValidatorMiddleware } from "../middlewares/expressValidatorMiddleware";
import { checkSchema } from "express-validator";
import passport from "passport";
import { checkVerifyUsageAccess } from "../middlewares/verifyUsageMiddleware";
import { verifyEmailDomain } from "../controllers/EmailDomainController";
import { createVerification } from "../controllers/VerifyController";
import type Project from "../models/Project";
import type ApiKey from "../models/ApiKey";
import type { HydratedDocument } from "mongoose";

const router = Router();

router.post(
  "/",
  checkSchema(
    {
      email: { isEmail: true, normalizeEmail: true },
    },
    ["body"]
  ),
  expressValidatorMiddleware,
  passport.authenticate("api_key", { session: false }),
  checkVerifyUsageAccess,
  async (
    req: Request<
      {},
      {},
      {
        email: string;
      }
    >,
    res: Response
  ) => {
    const project = req.user as HydratedDocument<Project> & { apiKey: HydratedDocument<ApiKey> };
    const result = await verifyEmailDomain({
      email: req.body.email,
      timeout: 4000,
      forceSync: true,
    });
    await createVerification({
      projectId: project._id.toString(),
      apiKeyId: project.apiKey._id.toString(),
      email: req.body.email,
      domain: result.domain,
      mx_records: result.mx_records,
      disposable: result.disposable,
      webmail: result.webmail,
      status: result.status,
      regexp: result.regexp,
      smtp_server: result.smtp_server,
      smtp_check: result.smtp_check,
    });
    res.json(result);
  }
);

export default router;
