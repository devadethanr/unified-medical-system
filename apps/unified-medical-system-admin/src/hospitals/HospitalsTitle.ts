import { Hospitals as THospitals } from "../api/hospitals/Hospitals";

export const HOSPITALS_TITLE_FIELD = "hsptlHospitalName";

export const HospitalsTitle = (record: THospitals): string => {
  return record.hsptlHospitalName?.toString() || String(record.id);
};
