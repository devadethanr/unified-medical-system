import { HospitalsWhereInput } from "./HospitalsWhereInput";
import { HospitalsOrderByInput } from "./HospitalsOrderByInput";

export type HospitalsFindManyArgs = {
  where?: HospitalsWhereInput;
  orderBy?: Array<HospitalsOrderByInput>;
  skip?: number;
  take?: number;
};
