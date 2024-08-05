import { Complaints as TComplaints } from "../api/complaints/Complaints";

export const COMPLAINTS_TITLE_FIELD = "cpResolution";

export const ComplaintsTitle = (record: TComplaints): string => {
  return record.cpResolution?.toString() || String(record.id);
};
