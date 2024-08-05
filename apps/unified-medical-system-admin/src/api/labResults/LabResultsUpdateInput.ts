import { InputJsonValue } from "../../types";

export type LabResultsUpdateInput = {
  lbrLabTechnicianId?: number | null;
  lbrPatientId?: string | null;
  lbrResultDate?: Date | null;
  lbrResultDetails?: InputJsonValue;
  lbrRolesId?: number | null;
  lbrStatus?: string | null;
  lbrTestType?: string | null;
};
