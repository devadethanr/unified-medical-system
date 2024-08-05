import { PatientDetailsWhereInput } from "./PatientDetailsWhereInput";
import { PatientDetailsOrderByInput } from "./PatientDetailsOrderByInput";

export type PatientDetailsFindManyArgs = {
  where?: PatientDetailsWhereInput;
  orderBy?: Array<PatientDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
