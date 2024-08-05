import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DoctorDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DoctorDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dd_availability" source="ddAvailability" />
        <TextField label="dd_doctorId" source="ddDoctorId" />
        <TextField label="dd_medicalId" source="ddMedicalId" />
        <TextField label="dd_photo" source="ddPhoto" />
        <TextField label="dd_qualification" source="ddQualification" />
        <TextField label="dd_status" source="ddStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
