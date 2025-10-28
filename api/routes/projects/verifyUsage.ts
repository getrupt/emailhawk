import { Router } from "express";
import passport from "passport";
import type { Request, Response } from "express";
import { getVerifyUsage } from "../../controllers/VerifyUsageController.js";
import { getProjectById } from "../../controllers/ProjectController.js";

const router = Router({ mergeParams: true });

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (req: Request, res: Response) => {
    const project = await getProjectById(req.params.projectId!);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const verifyUsage = await getVerifyUsage({
      projectId: project.id,
      date: new Date(),
    });
    res.json(verifyUsage);
  }
);

export default router;
