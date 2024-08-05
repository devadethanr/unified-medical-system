import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const SymptomsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="sym_date" source="symDate" />
        <TextInput label="sym_patientId" source="symPatientId" />
        <TextInput
          label="sym_reportedSymptoms"
          multiline
          source="symReportedSymptoms"
        />
        <NumberInput step={1} label="sym_rolesId" source="symRolesId" />
        <TextInput label="sym_status" source="symStatus" />
      </SimpleForm>
    </Create>
  );
};
