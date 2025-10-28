export default interface ApiKey {
  _id: string;
  name: string;
  key: string;
  projectId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
