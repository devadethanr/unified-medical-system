import { SortOrder } from "../../util/SortOrder";

export type PatientDetailsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pdMedicalHistory?: SortOrder;
  pdPatientId?: SortOrder;
  pdPhoto?: SortOrder;
  pdStatus?: SortOrder;
  updatedAt?: SortOrder;
};
