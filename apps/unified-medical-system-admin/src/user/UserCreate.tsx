import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="googleAuthId" source="googleAuthId" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="name" source="name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordHash" source="passwordHash" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <DateTimeInput label="registeredAt" source="registeredAt" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="status" source="status" />
        <TextInput label="umsId" source="umsId" />
        <TextInput label="Username" source="username" />
        <TextInput label="usr_address" source="usrAddress" />
        <DateTimeInput label="usr_deletedAt" source="usrDeletedAt" />
        <TextInput label="usr_googleAuthId" source="usrGoogleAuthId" />
        <TextInput label="usr_name" source="usrName" />
        <TextInput label="usr_passwordHash" source="usrPasswordHash" />
        <TextInput label="usr_phoneNumber" source="usrPhoneNumber" />
        <DateTimeInput label="usr_registeredAt" source="usrRegisteredAt" />
        <TextInput label="usr_status" source="usrStatus" />
        <TextInput label="usr_umsId" source="usrUmsId" />
      </SimpleForm>
    </Create>
  );
};
