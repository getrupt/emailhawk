import { Router } from "express";
import { syncEmailDomains } from "../../controllers/EmailDomainController";

const router = Router();

router.post("/sync-email-domains", async (req, res) => {
  await syncEmailDomains();
  return res.json({ success: true });
});

export default router;
