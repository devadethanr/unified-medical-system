import { SortOrder } from "../../util/SortOrder";

export type DiseaseOutbreaksOrderByInput = {
  createdAt?: SortOrder;
  dobCaseCount?: SortOrder;
  dobDiseaseName?: SortOrder;
  dobLatestUpdate?: SortOrder;
  dobLocation?: SortOrder;
  dobRolesId?: SortOrder;
  dobStartDate?: SortOrder;
  dobStatus?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
