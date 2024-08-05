import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ComplaintsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cp_description" multiline source="cpDescription" />
        <TextInput label="cp_resolution" source="cpResolution" />
        <NumberInput step={1} label="cp_rolesId" source="cpRolesId" />
        <TextInput label="cp_status" source="cpStatus" />
        <TextInput label="cp_subject" source="cpSubject" />
        <TextInput label="cp_umsId" source="cpUmsId" />
      </SimpleForm>
    </Create>
  );
};
