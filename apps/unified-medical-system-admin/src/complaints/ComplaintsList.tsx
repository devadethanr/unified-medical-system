import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ComplaintsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplaintsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cp_description" source="cpDescription" />
        <TextField label="cp_resolution" source="cpResolution" />
        <TextField label="cp_rolesId" source="cpRolesId" />
        <TextField label="cp_status" source="cpStatus" />
        <TextField label="cp_subject" source="cpSubject" />
        <TextField label="cp_umsId" source="cpUmsId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
