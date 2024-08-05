import { PatientDetails as TPatientDetails } from "../api/patientDetails/PatientDetails";

export const PATIENTDETAILS_TITLE_FIELD = "pdPatientId";

export const PatientDetailsTitle = (record: TPatientDetails): string => {
  return record.pdPatientId?.toString() || String(record.id);
};
