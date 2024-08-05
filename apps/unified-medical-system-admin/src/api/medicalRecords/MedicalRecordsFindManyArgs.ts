import { MedicalRecordsWhereInput } from "./MedicalRecordsWhereInput";
import { MedicalRecordsOrderByInput } from "./MedicalRecordsOrderByInput";

export type MedicalRecordsFindManyArgs = {
  where?: MedicalRecordsWhereInput;
  orderBy?: Array<MedicalRecordsOrderByInput>;
  skip?: number;
  take?: number;
};
