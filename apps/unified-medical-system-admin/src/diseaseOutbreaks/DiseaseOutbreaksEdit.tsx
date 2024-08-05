import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DiseaseOutbreaksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="dob_caseCount" source="dobCaseCount" />
        <TextInput label="dob_diseaseName" source="dobDiseaseName" />
        <DateTimeInput label="dob_latestUpdate" source="dobLatestUpdate" />
        <div />
        <NumberInput step={1} label="dob_rolesId" source="dobRolesId" />
        <DateTimeInput label="dob_startDate" source="dobStartDate" />
        <TextInput label="dob_status" source="dobStatus" />
      </SimpleForm>
    </Edit>
  );
};
