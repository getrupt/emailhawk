// import { incrementPromptUsage } from "./VerifyUsageController";
import mongoose from "mongoose";
import VerifyUsage from "../db/mongo/schemas/VerifyUsage";
import { getProjectById } from "./ProjectController";
import { getStripeSubscription, sendStripeMeterEvent } from "./StripeController";

export async function createVerifyUsage({
  projectId,
  count = 1,
  periodStart,
  periodEnd,
}: {
  projectId: string;
  count: number;
  periodStart: Date;
  periodEnd: Date;
}) {
  const createdVerifyUsage = new VerifyUsage();
  createdVerifyUsage.projectId = new mongoose.Types.ObjectId(projectId);
  createdVerifyUsage.count = count;
  createdVerifyUsage.periodStart = periodStart;
  createdVerifyUsage.periodEnd = periodEnd;
  await createdVerifyUsage.save();

  return createdVerifyUsage;
}

export async function getVerifyUsage({
  projectId,
  date,
}: {
  projectId: string;
  date: Date;
}) {
  return await VerifyUsage.findOne({
    projectId: new mongoose.Types.ObjectId(projectId),
    periodStart: { $lte: date },
    periodEnd: { $gte: date },
  });
}

export async function incrementVerifyUsage({
  projectId,
  date,
  count = 1,
}: {
  projectId: string;
  date: Date;
  count: number;
}) {
  const project = await getProjectById(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  const currentPeriodVerifyUsage = await getVerifyUsage({
    projectId,
    date,
  });

  if (!currentPeriodVerifyUsage) {
    const subscription = await getStripeSubscription({
      subscriptionId: project.stripeSubscriptionId,
    });

    return await createVerifyUsage({
      projectId,
      count,
      periodStart: new Date(subscription.current_period_start * 1000),
      periodEnd: new Date(subscription.current_period_end * 1000),
    });
  }

  if (currentPeriodVerifyUsage.count >= parseInt(process.env.VERIFY_USAGE_LIMIT!) && !project.stripePaymentMethodId) {
    throw new Error("Verify usage limit reached");
  }

  const updatedVerifyUsage = await VerifyUsage.findOneAndUpdate(
    {
      projectId,
      periodStart: { $lte: date },
      periodEnd: { $gte: date },
    },
    {
      $inc: { count },
    },
    {
      new: true,
    },
  );

  return updatedVerifyUsage;
}

export const chargeVerifyUsage = async ({
  projectId,
  stripeCustomerId,
  count = 1,
}: {
  projectId: string;
  stripeCustomerId: string;
  count?: number;
}) => {
  try {
    const verifyUsage = await incrementVerifyUsage({
      projectId,
      date: new Date(),
      count,
    });
    if (verifyUsage) {
      await sendStripeMeterEvent({
        event: process.env.STRIPE_METER_EVENT!,
        customerId: stripeCustomerId,
        value: count,
      });
    }
    return verifyUsage;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Verify usage limit reached"
    ) {
      throw new Error("Verify usage limit reached");
    }
    throw error;
  }
};
