import { raw, Router, type Request, type Response } from "express";
import { getProjectByStripeCustomerId, updateProject } from "../controllers/ProjectController";
import Stripe from "stripe";

const router = Router();
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

router.post(
  "/stripe",
  raw({ type: "application/json" }),
  async (req: Request, res: Response) => {
    const payload = req.body;
    const sig = req.headers["stripe-signature"];
    let event;

    if (!sig) {
      res.status(400).send("No signature");
      return;
    }

    try {
      event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err}`);
      return;
    }

    if (event.type === "payment_method.attached") {
      try {
        const paymentMethod = event.data.object as Stripe.PaymentMethod;
        const project = await getProjectByStripeCustomerId(paymentMethod.customer as string);
        if (!project) {
          res.status(404).send("Project not found");
          return;
        }
        await updateProject(project._id.toString(), { stripePaymentMethodId: paymentMethod.id });
      } catch (err) {
        console.error("Error processing payment method attached event", err);
      }
    }

    res.status(200).send();
  },
);

export default router;
