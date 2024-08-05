import { PatientsWhereInput } from "./PatientsWhereInput";
import { PatientsOrderByInput } from "./PatientsOrderByInput";

export type PatientsFindManyArgs = {
  where?: PatientsWhereInput;
  orderBy?: Array<PatientsOrderByInput>;
  skip?: number;
  take?: number;
};
