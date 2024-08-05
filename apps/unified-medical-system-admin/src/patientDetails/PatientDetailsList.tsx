import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PatientDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pd_medicalHistory" source="pdMedicalHistory" />
        <TextField label="pd_patientId" source="pdPatientId" />
        <TextField label="pd_photo" source="pdPhoto" />
        <TextField label="pd_status" source="pdStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
