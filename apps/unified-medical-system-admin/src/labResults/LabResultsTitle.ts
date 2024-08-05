import { LabResults as TLabResults } from "../api/labResults/LabResults";

export const LABRESULTS_TITLE_FIELD = "lbrPatientId";

export const LabResultsTitle = (record: TLabResults): string => {
  return record.lbrPatientId?.toString() || String(record.id);
};
