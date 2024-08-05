import { SortOrder } from "../../util/SortOrder";

export type HospitalsOrderByInput = {
  createdAt?: SortOrder;
  hsptlHospitalName?: SortOrder;
  hsptlLocation?: SortOrder;
  hsptlRolesId?: SortOrder;
  hsptlUmsId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
