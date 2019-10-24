import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

import MaterialTable from "material-table";

const UsersList = ({
  holders,
  getHolders,
  employees,
  getEmployees,
  getStudents,
  students
}) => {
  const classes = useStyles();

  const holdersWithRol = holders.map(holder => ({ ...holder, rol: "Holder" }));
  const studentsWithRol = students.map(student => ({
    ...student,
    rol: "Student"
  }));
  var users = employees;
  users = holdersWithRol.concat(employees);
  users = users.concat(studentsWithRol);

  useEffect(() => {
    getHolders();
  }, []);

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    getStudents();
  }, []);

  const columns = [
    { title: "First name", field: "name" },
    { title: "Last name", field: "lastName" },
    { title: "Phone number", field: "phone" },
    {
      title: "Address",
      field: "address"
    },
    {
      title: "Rol",
      field: "rol"
    },
    {
      title: "Email",
      field: "email"
    }
  ];

  return (
    <Paper className={classes.root}>
      <MaterialTable title="Users" columns={columns} data={users} />
    </Paper>
  );
};
export default withStyles()(UsersList);
