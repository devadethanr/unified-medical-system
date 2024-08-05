import { HospitalDetailsWhereInput } from "./HospitalDetailsWhereInput";
import { HospitalDetailsOrderByInput } from "./HospitalDetailsOrderByInput";

export type HospitalDetailsFindManyArgs = {
  where?: HospitalDetailsWhereInput;
  orderBy?: Array<HospitalDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
