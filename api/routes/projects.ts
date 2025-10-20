import { Router } from "express";
import verifyUsageRouter from "./projects/verifyUsage";

const router = Router();

router.use("/:projectId/verifyUsage", verifyUsageRouter);

export default router;
