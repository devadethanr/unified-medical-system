import { InputJsonValue } from "../../types";

export type PatientDetailsUpdateInput = {
  pdMedicalHistory?: InputJsonValue;
  pdPatientId?: string | null;
  pdPhoto?: string | null;
  pdStatus?: string | null;
};
