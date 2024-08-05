import { SortOrder } from "../../util/SortOrder";

export type LabResultsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lbrLabTechnicianId?: SortOrder;
  lbrPatientId?: SortOrder;
  lbrResultDate?: SortOrder;
  lbrResultDetails?: SortOrder;
  lbrRolesId?: SortOrder;
  lbrStatus?: SortOrder;
  lbrTestType?: SortOrder;
  updatedAt?: SortOrder;
};
