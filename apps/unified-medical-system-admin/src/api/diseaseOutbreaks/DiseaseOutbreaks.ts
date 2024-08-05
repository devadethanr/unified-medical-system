import { JsonValue } from "type-fest";

export type DiseaseOutbreaks = {
  createdAt: Date;
  dobCaseCount: number | null;
  dobDiseaseName: string | null;
  dobLatestUpdate: Date | null;
  dobLocation: JsonValue;
  dobRolesId: number | null;
  dobStartDate: Date | null;
  dobStatus: string | null;
  id: string;
  updatedAt: Date;
};
