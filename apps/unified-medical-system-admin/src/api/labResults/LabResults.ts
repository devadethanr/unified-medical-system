import { JsonValue } from "type-fest";

export type LabResults = {
  createdAt: Date;
  id: string;
  lbrLabTechnicianId: number | null;
  lbrPatientId: string | null;
  lbrResultDate: Date | null;
  lbrResultDetails: JsonValue;
  lbrRolesId: number | null;
  lbrStatus: string | null;
  lbrTestType: string | null;
  updatedAt: Date;
};
