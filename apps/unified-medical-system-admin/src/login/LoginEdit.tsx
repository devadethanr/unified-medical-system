import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LoginEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lgn_email" source="lgnEmail" type="email" />
        <TextInput label="lgn_passwordHash" source="lgnPasswordHash" />
        <NumberInput step={1} label="lgn_roleId" source="lgnRoleId" />
        <TextInput label="lgn_status" source="lgnStatus" />
        <TextInput label="lgn_umsId" source="lgnUmsId" />
      </SimpleForm>
    </Edit>
  );
};
