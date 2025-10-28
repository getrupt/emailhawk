import passport from "passport";
import type { Request, Response } from "express";
import {
  createStripeCheckoutSession,
  createStripeCustomerPortalSession,
  getStripeSubscription,
  getStripeUpcomingInvoice,
} from "../../controllers/StripeController";
import { Router } from "express";
import { getProjectById } from "../../controllers/ProjectController";

const router = Router({ mergeParams: true });

router.get(
  "/subscription",
  passport.authenticate("bearer", { session: false }),
  async (req: Request<{ projectId: string }, {}, {}, {}>, res: Response) => {
    const project = await getProjectById(req.params.projectId!);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const subscription = await getStripeSubscription({
      subscriptionId: project.stripeSubscriptionId,
    });

    let upcoming_invoice;
    if (subscription.status === "active") {
      upcoming_invoice = await getStripeUpcomingInvoice({
        subscriptionId: project.stripeSubscriptionId,
      });
    }

    res.json({
      subscription,
      upcoming_invoice,
    });
  }
);

router.get(
  "/manage",
  passport.authenticate("bearer", { session: false }),
  async (req: Request<{ projectId: string }, {}, {}, {}>, res: Response) => {
    const project = await getProjectById(req.params.projectId!);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const subscription = await getStripeSubscription({
      subscriptionId: project.stripeSubscriptionId,
    });
    if (!subscription) {
      const checkoutSession = await createStripeCheckoutSession({
        customerId: project.stripeCustomerId,
        priceId: process.env.STRIPE_PRICE_ID!,
      });
      res.json(checkoutSession);
      return;
    }
    const session = await createStripeCustomerPortalSession({
      customerId: project.stripeCustomerId,
    });
    res.json(session);
  }
);

export default router;
