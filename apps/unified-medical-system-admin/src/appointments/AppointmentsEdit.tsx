import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AppointmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="ap_appointmentNotes"
          multiline
          source="apAppointmentNotes"
        />
        <TextInput
          label="ap_appointmentSpecialization"
          source="apAppointmentSpecialization"
        />
        <TextInput label="ap_appointmentStatus" source="apAppointmentStatus" />
        <DateTimeInput label="ap_dateTime" source="apDateTime" />
        <TextInput
          label="ap_disabilityCertificateId"
          source="apDisabilityCertificateId"
        />
        <TextInput label="ap_doctorId" source="apDoctorId" />
        <TextInput label="ap_patientId" source="apPatientId" />
        <NumberInput step={1} label="ap_rolesId" source="apRolesId" />
        <TextInput label="ap_status" source="apStatus" />
      </SimpleForm>
    </Edit>
  );
};
