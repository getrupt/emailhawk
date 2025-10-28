import { Router } from "express";
import verifyUsageRouter from "./projects/verifyUsage";
import verifyRouter from "./projects/verify";
import apiKeyRouter from "./projects/apiKey";
import billingRouter from "./projects/billing";

const router = Router();

router.use("/:projectId/verifyUsage", verifyUsageRouter);
router.use("/:projectId/verify", verifyRouter);
router.use("/:projectId/apiKey", apiKeyRouter);
router.use("/:projectId/billing", billingRouter);

export default router;
