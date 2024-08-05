import { JsonValue } from "type-fest";

export type DoctorDetails = {
  createdAt: Date;
  ddAvailability: string | null;
  ddDoctorId: string | null;
  ddMedicalId: string | null;
  ddPhoto: string | null;
  ddQualification: JsonValue;
  ddStatus: string | null;
  id: string;
  updatedAt: Date;
};
