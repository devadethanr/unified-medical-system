import { InputJsonValue } from "../../types";

export type HospitalDetailsCreateInput = {
  hdAffiliationNumber?: string | null;
  hdHospitalId?: string | null;
  hdHospitalType?: string | null;
  hdSpeciality?: InputJsonValue;
  hdStatus?: string | null;
};
