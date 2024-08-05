import { InputJsonValue } from "../../types";

export type DoctorDetailsCreateInput = {
  ddAvailability?: string | null;
  ddDoctorId?: string | null;
  ddMedicalId?: string | null;
  ddPhoto?: string | null;
  ddQualification?: InputJsonValue;
  ddStatus?: string | null;
};
