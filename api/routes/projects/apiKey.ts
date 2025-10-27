import { Router } from "express";
import passport from "passport";
import type { Request, Response } from "express";
import { getVerifications } from "../../controllers/VerifyController.js";
import { getProjectById } from "../../controllers/ProjectController.js";
import { getApiKeysByProjectId } from "../../controllers/ApiKeyController.js";

const router = Router({ mergeParams: true });

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (
    req: Request<{ projectId: string }, {}, {}, { page?: number; per?: number }>,
    res: Response
  ) => {
    const project = await getProjectById(req.params.projectId!);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const apiKeys = await getApiKeysByProjectId(req.params.projectId!);
    res.json(apiKeys);
  }
);

export default router;
