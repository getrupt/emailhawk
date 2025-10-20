import Project from "../db/mongo/schemas/Project";
import type User from "../models/User";
import {
  createStripeCustomer,
  createStripeSubscription,
} from "./StripeController";
import { createVerifyUsage } from "./VerifyUsageController";

export async function createProject({
  name,
  user,
}: {
  name: string;
  user: User;
}) {
  const customer = await createStripeCustomer({
    name,
    email: user.email,
  });

  if (!process.env.STRIPE_PRICE_ID) {
    throw new Error("STRIPE_PRICE_ID is not set");
  }

  const subscription = await createStripeSubscription({
    customerId: customer.id,
    priceId: process.env.STRIPE_PRICE_ID,
  });

  const project = new Project();
  project.name = name;
  project.stripeCustomerId = customer.id;
  project.stripeSubscriptionId = subscription.id;
  project.users.addToSet(user.id);
  await project.save();

  const verifyUsage = await createVerifyUsage({
    projectId: project.id,
    count: 0,
    periodStart: new Date(subscription.current_period_start * 1000),
    periodEnd: new Date(subscription.current_period_end * 1000),
  });

  return { project, verifyUsage };
}

export async function getProjectsByUserId(userId: string) {
  return await Project.find({ users: userId });
}

export async function getProjectById(projectId: string) {
  return await Project.findById(projectId);
}

export async function getProjectByStripeCustomerId(stripeCustomerId: string) {
  return await Project.findOne({ stripeCustomerId });
}

export async function updateProject(projectId: string, data: any) {
  return await Project.findByIdAndUpdate(projectId, data);
}
