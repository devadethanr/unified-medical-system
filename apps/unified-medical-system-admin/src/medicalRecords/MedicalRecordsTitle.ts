import { MedicalRecords as TMedicalRecords } from "../api/medicalRecords/MedicalRecords";

export const MEDICALRECORDS_TITLE_FIELD = "mrDoctorId";

export const MedicalRecordsTitle = (record: TMedicalRecords): string => {
  return record.mrDoctorId?.toString() || String(record.id);
};
