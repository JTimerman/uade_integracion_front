import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import { toast } from "react-toastify";
import MaterialTable from "material-table";

const UsersList = ({
  holders,
  getHolders,
  employees,
  getEmployees,
  getStudents,
  students,
  updateHolder,
  updateEmployee,
  updateStudent,
  deleteHolder,
  deleteStudent,
  deleteEmployee
}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    data: holders.concat(students.concat(employees))
  });
  const [editedUser, setEditedUser] = React.useState({});
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

  const handlerEditUser = newData => {
    switch (newData.rol) {
      case "Holder":
        updateHolder(newData.holderid, newData)
          .then(res => {
            toast.success("The update was successfull!");
            getHolders();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a holder!");
          });
        break;
      case "Student":
        updateStudent(newData.studentid, newData)
          .then(res => {
            toast.success("The update was successfull!");
            getStudents();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a student!");
          });
      case "Maestro" ||
        "Director" ||
        "Secretaria" ||
        "Teacher" ||
        "Janitor" ||
        "Principal":
        updateEmployee(newData.employeeid, newData)
          .then(res => {
            toast.success("The update was successfull!");
            getEmployees();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a student!");
          });
    }
  };

  const handlerDeleteUser = data => {
    switch (data.rol) {
      case "Holder":
        deleteHolder(data.holderid)
          .then(res => {
            toast.success("The update was successfull!");
            getHolders();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a holder!");
          });
        break;
      case "Student":
        deleteStudent(data.studentid)
          .then(res => {
            toast.success("The update was successfull!");
            getStudents();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a student!");
          });
      case "Maestro" ||
        "Director" ||
        "Secretaria" ||
        "Teacher" ||
        "Janitor" ||
        "Principal":
        deleteEmployee(data.employeeid)
          .then(res => {
            toast.success("The update was successfull!");
            getEmployees();
          })
          .catch(err => {
            toast.error("An error has ocurred while updating a student!");
          });
    }
  };

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
      field: "email",
      editable: false
    }
  ];

  return (
    <Paper className={classes.root}>
      <MaterialTable
        title="Users"
        columns={columns}
        data={users}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                const newUser = newData;
                setEditedUser(newUser);
                handlerEditUser(newUser);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
                handlerDeleteUser(oldData);
              }, 600);
            })
        }}
      />
    </Paper>
  );
};
export default withStyles()(UsersList);
