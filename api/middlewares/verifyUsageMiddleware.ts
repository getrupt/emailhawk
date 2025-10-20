import type { Request, Response, NextFunction } from "express";
import { chargeVerifyUsage } from "../controllers/VerifyUsageController";
import type Project from "../models/Project";

export const checkVerifyUsageAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const project = req.user as Project;
  try {
    await chargeVerifyUsage({
      projectId: project.id,
      stripeCustomerId: project.stripeCustomerId,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Verify usage limit reached"
    ) {
      res.status(403).json({
        errors: [
          {
            msg: "Verify usage limit reached. Add a payment method to your account to make more requests.",
          },
        ],
      });
      return;
    }
    throw error;
  }
  next();
};
