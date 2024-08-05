import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ComplaintsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cp_description" source="cpDescription" />
        <TextField label="cp_resolution" source="cpResolution" />
        <TextField label="cp_rolesId" source="cpRolesId" />
        <TextField label="cp_status" source="cpStatus" />
        <TextField label="cp_subject" source="cpSubject" />
        <TextField label="cp_umsId" source="cpUmsId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
