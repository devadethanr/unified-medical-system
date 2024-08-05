import { DoctorsWhereInput } from "./DoctorsWhereInput";
import { DoctorsOrderByInput } from "./DoctorsOrderByInput";

export type DoctorsFindManyArgs = {
  where?: DoctorsWhereInput;
  orderBy?: Array<DoctorsOrderByInput>;
  skip?: number;
  take?: number;
};
