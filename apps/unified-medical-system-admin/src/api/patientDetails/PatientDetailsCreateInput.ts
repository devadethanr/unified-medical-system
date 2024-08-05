import { InputJsonValue } from "../../types";

export type PatientDetailsCreateInput = {
  pdMedicalHistory?: InputJsonValue;
  pdPatientId?: string | null;
  pdPhoto?: string | null;
  pdStatus?: string | null;
};
