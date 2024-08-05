import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LabResultsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LabResultsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
