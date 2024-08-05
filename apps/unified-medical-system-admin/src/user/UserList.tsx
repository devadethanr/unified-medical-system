import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="googleAuthId" source="googleAuthId" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="name" source="name" />
        <TextField label="passwordHash" source="passwordHash" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="registeredAt" source="registeredAt" />
        <TextField label="Roles" source="roles" />
        <TextField label="status" source="status" />
        <TextField label="umsId" source="umsId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="usr_address" source="usrAddress" />
        <TextField label="usr_deletedAt" source="usrDeletedAt" />
        <TextField label="usr_googleAuthId" source="usrGoogleAuthId" />
        <TextField label="usr_name" source="usrName" />
        <TextField label="usr_passwordHash" source="usrPasswordHash" />
        <TextField label="usr_phoneNumber" source="usrPhoneNumber" />
        <TextField label="usr_registeredAt" source="usrRegisteredAt" />
        <TextField label="usr_status" source="usrStatus" />
        <TextField label="usr_umsId" source="usrUmsId" />
      </Datagrid>
    </List>
  );
};
