import { Patients as TPatients } from "../api/patients/Patients";

export const PATIENTS_TITLE_FIELD = "ptGender";

export const PatientsTitle = (record: TPatients): string => {
  return record.ptGender?.toString() || String(record.id);
};
