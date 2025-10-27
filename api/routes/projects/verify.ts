import { Router } from "express";
import passport from "passport";
import type { Request, Response } from "express";
import { getVerifications } from "../../controllers/VerifyController.js";
import { getProjectById } from "../../controllers/ProjectController.js";

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
    const verifications = await getVerifications({
      projectId: project.id,
      page: req.query.page || 1,
      per: req.query.per || 10,
    });
    res.json(verifications);
  }
);

export default router;
