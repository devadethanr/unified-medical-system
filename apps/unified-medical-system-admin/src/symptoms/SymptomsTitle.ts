import { Symptoms as TSymptoms } from "../api/symptoms/Symptoms";

export const SYMPTOMS_TITLE_FIELD = "symPatientId";

export const SymptomsTitle = (record: TSymptoms): string => {
  return record.symPatientId?.toString() || String(record.id);
};
