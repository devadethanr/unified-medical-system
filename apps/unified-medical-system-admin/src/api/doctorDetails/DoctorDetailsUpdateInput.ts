import { InputJsonValue } from "../../types";

export type DoctorDetailsUpdateInput = {
  ddAvailability?: string | null;
  ddDoctorId?: string | null;
  ddMedicalId?: string | null;
  ddPhoto?: string | null;
  ddQualification?: InputJsonValue;
  ddStatus?: string | null;
};
