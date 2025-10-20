import { Router } from "express";
import type { Request, Response } from "express";
import { validationMiddleware } from "../middlewares/validation";
import { checkSchema } from "express-validator";
import passport from "passport";
import { checkVerifyUsageAccess } from "../middlewares/verifyUsage";
import { verifyEmailDomain } from "../controllers/EmailDomainController";

const router = Router();

router.post(
  "/",
  checkSchema(
    {
      email: { isEmail: true, normalizeEmail: true },
    },
    ["body"]
  ),
  validationMiddleware,
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
    const result = await verifyEmailDomain({
      email: req.body.email,
      timeout: 4000,
      forceSync: true,
    });
    res.json(result);
  }
);

export default router;
