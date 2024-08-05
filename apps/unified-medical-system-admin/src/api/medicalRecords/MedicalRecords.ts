import { JsonValue } from "type-fest";

export type MedicalRecords = {
  createdAt: Date;
  id: string;
  mrDateOfRecord: Date | null;
  mrDoctorId: string | null;
  mrDocumentContent: JsonValue;
  mrDocumentType: string | null;
  mrHospitalDb: string | null;
  mrPatientId: string | null;
  mrRolesId: number | null;
  mrStatus: string | null;
  updatedAt: Date;
};
