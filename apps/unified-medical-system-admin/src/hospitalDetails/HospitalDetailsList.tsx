import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HospitalDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HospitalDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="hd_affiliationNumber" source="hdAffiliationNumber" />
        <TextField label="hd_hospitalId" source="hdHospitalId" />
        <TextField label="hd_hospitalType" source="hdHospitalType" />
        <TextField label="hd_speciality" source="hdSpeciality" />
        <TextField label="hd_status" source="hdStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
