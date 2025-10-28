export default interface Project {
  _id: string;
  name: string;
  users: string[];
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripePaymentMethodId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
