import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RolesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="rle_roleName" source="rleRoleName" />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Create>
  );
};
