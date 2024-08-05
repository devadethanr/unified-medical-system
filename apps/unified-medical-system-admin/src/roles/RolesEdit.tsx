import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RolesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="rle_roleName" source="rleRoleName" />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Edit>
  );
};
