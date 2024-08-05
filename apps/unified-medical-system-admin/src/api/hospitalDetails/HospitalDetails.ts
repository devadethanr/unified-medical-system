import { JsonValue } from "type-fest";

export type HospitalDetails = {
  createdAt: Date;
  hdAffiliationNumber: string | null;
  hdHospitalId: string | null;
  hdHospitalType: string | null;
  hdSpeciality: JsonValue;
  hdStatus: string | null;
  id: string;
  updatedAt: Date;
};
