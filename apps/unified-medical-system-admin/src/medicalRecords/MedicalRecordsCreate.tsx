import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MedicalRecordsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="mr_dateOfRecord" source="mrDateOfRecord" />
        <TextInput label="mr_doctorId" source="mrDoctorId" />
        <div />
        <TextInput label="mr_documentType" source="mrDocumentType" />
        <TextInput label="mr_hospitalDb" source="mrHospitalDb" />
        <TextInput label="mr_patientId" source="mrPatientId" />
        <NumberInput step={1} label="mr_rolesId" source="mrRolesId" />
        <TextInput label="mr_status" source="mrStatus" />
      </SimpleForm>
    </Create>
  );
};
