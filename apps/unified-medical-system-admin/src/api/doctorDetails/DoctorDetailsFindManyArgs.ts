import { DoctorDetailsWhereInput } from "./DoctorDetailsWhereInput";
import { DoctorDetailsOrderByInput } from "./DoctorDetailsOrderByInput";

export type DoctorDetailsFindManyArgs = {
  where?: DoctorDetailsWhereInput;
  orderBy?: Array<DoctorDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
