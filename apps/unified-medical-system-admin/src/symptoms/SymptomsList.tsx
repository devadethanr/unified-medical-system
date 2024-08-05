import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SymptomsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SymptomsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sym_date" source="symDate" />
        <TextField label="sym_patientId" source="symPatientId" />
        <TextField label="sym_reportedSymptoms" source="symReportedSymptoms" />
        <TextField label="sym_rolesId" source="symRolesId" />
        <TextField label="sym_status" source="symStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
