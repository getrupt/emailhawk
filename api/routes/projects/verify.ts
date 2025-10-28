import { Router } from "express";
import passport from "passport";
import type { Request, Response } from "express";
import {
  getVerifications,
  getVerificationsCount,
} from "../../controllers/VerifyController.js";
import { getProjectById } from "../../controllers/ProjectController.js";

const router = Router({ mergeParams: true });

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (
    req: Request<
      { projectId: string },
      {},
      {},
      { page?: number; per?: number }
    >,
    res: Response
  ) => {
    const project = await getProjectById(req.params.projectId!);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const [docs, total] = await Promise.all([
      getVerifications({
        projectId: project.id,
        page: req.query.page || 1,
        per: req.query.per || 10,
      }),
      getVerificationsCount({
        projectId: project.id,
      }),
    ]);
    res.json({
      docs,
      total,
      page: req.query.page || 1,
      per: req.query.per || 10,
    });
  }
);

export default router;
