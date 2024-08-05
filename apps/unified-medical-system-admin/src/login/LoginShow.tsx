import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LoginShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lgn_email" source="lgnEmail" />
        <TextField label="lgn_passwordHash" source="lgnPasswordHash" />
        <TextField label="lgn_roleId" source="lgnRoleId" />
        <TextField label="lgn_status" source="lgnStatus" />
        <TextField label="lgn_umsId" source="lgnUmsId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
