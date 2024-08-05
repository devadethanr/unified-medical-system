import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DiseaseOutbreaksCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="dob_caseCount" source="dobCaseCount" />
        <TextInput label="dob_diseaseName" source="dobDiseaseName" />
        <DateTimeInput label="dob_latestUpdate" source="dobLatestUpdate" />
        <div />
        <NumberInput step={1} label="dob_rolesId" source="dobRolesId" />
        <DateTimeInput label="dob_startDate" source="dobStartDate" />
        <TextInput label="dob_status" source="dobStatus" />
      </SimpleForm>
    </Create>
  );
};
