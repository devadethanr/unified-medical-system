import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AppointmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ap_appointmentNotes" source="apAppointmentNotes" />
        <TextField
          label="ap_appointmentSpecialization"
          source="apAppointmentSpecialization"
        />
        <TextField label="ap_appointmentStatus" source="apAppointmentStatus" />
        <TextField label="ap_dateTime" source="apDateTime" />
        <TextField
          label="ap_disabilityCertificateId"
          source="apDisabilityCertificateId"
        />
        <TextField label="ap_doctorId" source="apDoctorId" />
        <TextField label="ap_patientId" source="apPatientId" />
        <TextField label="ap_rolesId" source="apRolesId" />
        <TextField label="ap_status" source="apStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
