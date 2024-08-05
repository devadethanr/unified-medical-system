import { InputJsonValue } from "../../types";

export type HospitalDetailsUpdateInput = {
  hdAffiliationNumber?: string | null;
  hdHospitalId?: string | null;
  hdHospitalType?: string | null;
  hdSpeciality?: InputJsonValue;
  hdStatus?: string | null;
};
