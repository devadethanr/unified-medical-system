import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HospitalsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HospitalsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="hsptl_hospitalName" source="hsptlHospitalName" />
        <TextField label="hsptl_location" source="hsptlLocation" />
        <TextField label="hsptl_rolesId" source="hsptlRolesId" />
        <TextField label="hsptl_umsId" source="hsptlUmsId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
