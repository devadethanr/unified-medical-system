import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LabResultsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lbr_labTechnicianId" source="lbrLabTechnicianId" />
        <TextField label="lbr_patientId" source="lbrPatientId" />
        <TextField label="lbr_resultDate" source="lbrResultDate" />
        <TextField label="lbr_resultDetails" source="lbrResultDetails" />
        <TextField label="lbr_rolesId" source="lbrRolesId" />
        <TextField label="lbr_status" source="lbrStatus" />
        <TextField label="lbr_testType" source="lbrTestType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
