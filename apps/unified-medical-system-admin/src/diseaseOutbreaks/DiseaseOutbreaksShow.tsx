import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DiseaseOutbreaksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dob_caseCount" source="dobCaseCount" />
        <TextField label="dob_diseaseName" source="dobDiseaseName" />
        <TextField label="dob_latestUpdate" source="dobLatestUpdate" />
        <TextField label="dob_location" source="dobLocation" />
        <TextField label="dob_rolesId" source="dobRolesId" />
        <TextField label="dob_startDate" source="dobStartDate" />
        <TextField label="dob_status" source="dobStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
