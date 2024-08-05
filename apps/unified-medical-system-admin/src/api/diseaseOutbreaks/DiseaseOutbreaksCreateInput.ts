import { InputJsonValue } from "../../types";

export type DiseaseOutbreaksCreateInput = {
  dobCaseCount?: number | null;
  dobDiseaseName?: string | null;
  dobLatestUpdate?: Date | null;
  dobLocation?: InputJsonValue;
  dobRolesId?: number | null;
  dobStartDate?: Date | null;
  dobStatus?: string | null;
};
