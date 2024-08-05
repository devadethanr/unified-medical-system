import { SortOrder } from "../../util/SortOrder";

export type LoginOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lgnEmail?: SortOrder;
  lgnPasswordHash?: SortOrder;
  lgnRoleId?: SortOrder;
  lgnStatus?: SortOrder;
  lgnUmsId?: SortOrder;
  updatedAt?: SortOrder;
};
