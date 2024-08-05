import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppointmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppointmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
