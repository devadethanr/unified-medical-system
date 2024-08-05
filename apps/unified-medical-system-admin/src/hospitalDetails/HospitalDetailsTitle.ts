import { HospitalDetails as THospitalDetails } from "../api/hospitalDetails/HospitalDetails";

export const HOSPITALDETAILS_TITLE_FIELD = "hdAffiliationNumber";

export const HospitalDetailsTitle = (record: THospitalDetails): string => {
  return record.hdAffiliationNumber?.toString() || String(record.id);
};
