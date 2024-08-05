import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MedicalRecordsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MedicalRecordsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="mr_dateOfRecord" source="mrDateOfRecord" />
        <TextField label="mr_doctorId" source="mrDoctorId" />
        <TextField label="mr_documentContent" source="mrDocumentContent" />
        <TextField label="mr_documentType" source="mrDocumentType" />
        <TextField label="mr_hospitalDb" source="mrHospitalDb" />
        <TextField label="mr_patientId" source="mrPatientId" />
        <TextField label="mr_rolesId" source="mrRolesId" />
        <TextField label="mr_status" source="mrStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
