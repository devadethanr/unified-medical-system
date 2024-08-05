export type Login = {
  createdAt: Date;
  id: string;
  lgnEmail: string | null;
  lgnPasswordHash: string | null;
  lgnRoleId: number | null;
  lgnStatus: string | null;
  lgnUmsId: string | null;
  updatedAt: Date;
};
