import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LoginList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Logins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lgn_email" source="lgnEmail" />
        <TextField label="lgn_passwordHash" source="lgnPasswordHash" />
        <TextField label="lgn_roleId" source="lgnRoleId" />
        <TextField label="lgn_status" source="lgnStatus" />
        <TextField label="lgn_umsId" source="lgnUmsId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
