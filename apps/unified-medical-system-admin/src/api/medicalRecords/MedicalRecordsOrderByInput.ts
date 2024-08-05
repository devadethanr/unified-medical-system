import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mrDateOfRecord?: SortOrder;
  mrDoctorId?: SortOrder;
  mrDocumentContent?: SortOrder;
  mrDocumentType?: SortOrder;
  mrHospitalDb?: SortOrder;
  mrPatientId?: SortOrder;
  mrRolesId?: SortOrder;
  mrStatus?: SortOrder;
  updatedAt?: SortOrder;
};
