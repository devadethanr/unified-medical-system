import { SortOrder } from "../../util/SortOrder";

export type PatientsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ptDateOfBirth?: SortOrder;
  ptGender?: SortOrder;
  ptRolesId?: SortOrder;
  ptUmsId?: SortOrder;
  updatedAt?: SortOrder;
};
