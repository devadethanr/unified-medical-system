import { SortOrder } from "../../util/SortOrder";

export type ComplaintsOrderByInput = {
  cpDescription?: SortOrder;
  cpResolution?: SortOrder;
  cpRolesId?: SortOrder;
  cpStatus?: SortOrder;
  cpSubject?: SortOrder;
  cpUmsId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
