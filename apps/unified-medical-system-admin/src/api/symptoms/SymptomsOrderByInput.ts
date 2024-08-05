import { SortOrder } from "../../util/SortOrder";

export type SymptomsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  symDate?: SortOrder;
  symPatientId?: SortOrder;
  symReportedSymptoms?: SortOrder;
  symRolesId?: SortOrder;
  symStatus?: SortOrder;
  updatedAt?: SortOrder;
};
