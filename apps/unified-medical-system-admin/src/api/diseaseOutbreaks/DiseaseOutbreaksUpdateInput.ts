import { InputJsonValue } from "../../types";

export type DiseaseOutbreaksUpdateInput = {
  dobCaseCount?: number | null;
  dobDiseaseName?: string | null;
  dobLatestUpdate?: Date | null;
  dobLocation?: InputJsonValue;
  dobRolesId?: number | null;
  dobStartDate?: Date | null;
  dobStatus?: string | null;
};
