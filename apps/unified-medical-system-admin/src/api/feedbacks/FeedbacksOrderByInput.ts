import { SortOrder } from "../../util/SortOrder";

export type FeedbacksOrderByInput = {
  createdAt?: SortOrder;
  fbDescription?: SortOrder;
  fbRating?: SortOrder;
  fbRolesId?: SortOrder;
  fbStatus?: SortOrder;
  fbSubject?: SortOrder;
  fbUmsId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
