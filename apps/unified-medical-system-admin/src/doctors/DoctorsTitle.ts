import { Doctors as TDoctors } from "../api/doctors/Doctors";

export const DOCTORS_TITLE_FIELD = "drSpecialization";

export const DoctorsTitle = (record: TDoctors): string => {
  return record.drSpecialization?.toString() || String(record.id);
};
