import { InputJsonValue } from "../../types";

export type MedicalRecordsCreateInput = {
  mrDateOfRecord?: Date | null;
  mrDoctorId?: string | null;
  mrDocumentContent?: InputJsonValue;
  mrDocumentType?: string | null;
  mrHospitalDb?: string | null;
  mrPatientId?: string | null;
  mrRolesId?: number | null;
  mrStatus?: string | null;
};
