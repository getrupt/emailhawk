export default interface VerifyUsage {
  id: string;
  projectId: string;
  count: number;
  periodStart: Date;
  periodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}
