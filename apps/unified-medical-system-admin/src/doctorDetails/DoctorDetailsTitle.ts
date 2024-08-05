import { DoctorDetails as TDoctorDetails } from "../api/doctorDetails/DoctorDetails";

export const DOCTORDETAILS_TITLE_FIELD = "ddAvailability";

export const DoctorDetailsTitle = (record: TDoctorDetails): string => {
  return record.ddAvailability?.toString() || String(record.id);
};
