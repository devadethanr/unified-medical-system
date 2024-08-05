import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LabResultsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="lbr_labTechnicianId"
          source="lbrLabTechnicianId"
        />
        <TextInput label="lbr_patientId" source="lbrPatientId" />
        <DateTimeInput label="lbr_resultDate" source="lbrResultDate" />
        <div />
        <NumberInput step={1} label="lbr_rolesId" source="lbrRolesId" />
        <TextInput label="lbr_status" source="lbrStatus" />
        <TextInput label="lbr_testType" source="lbrTestType" />
      </SimpleForm>
    </Create>
  );
};
