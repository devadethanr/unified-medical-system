import { JsonValue } from "type-fest";

export type PatientDetails = {
  createdAt: Date;
  id: string;
  pdMedicalHistory: JsonValue;
  pdPatientId: string | null;
  pdPhoto: string | null;
  pdStatus: string | null;
  updatedAt: Date;
};
