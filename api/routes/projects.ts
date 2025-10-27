import { Router } from "express";
import verifyUsageRouter from "./projects/verifyUsage";
import verifyRouter from "./projects/verify";
import apiKeyRouter from "./projects/apiKey";

const router = Router();

router.use("/:projectId/verifyUsage", verifyUsageRouter);
router.use("/:projectId/verify", verifyRouter);
router.use("/:projectId/apiKey", apiKeyRouter);

export default router;
