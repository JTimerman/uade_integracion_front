import React, { useEffect } from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerEditUser = newData => {
    switch (newData.rol) {
      case "Holder":
        updateHolder(newData.holderid, newData)
          .then(() => {
            toast.success("The update was successful!");
            getHolders();
          })
          .catch(() => {
            toast.error("An error has ocurred while updating a holder!");
          });
        break;
      case "Student":
        updateStudent(newData.id, newData)
          .then(() => {
            toast.success("The update was successful!");
            getStudents();
          })
          .catch(() => {
            toast.error("An error has ocurred while updating a student!");
          });
        break;
      case "Maestro":
      case "Director":
      case "Secretaria":
      case "Teacher":
      case "Janitor":
      case "Principal":
        updateEmployee(newData.id, newData)
          .then(() => {
            toast.success("The update was successful!");
            getEmployees();
          })
          .catch(() => {
            toast.error("An error has ocurred while updating an employee!");
          });
        break;
      default:
        break;
    }
  };

  const handlerDeleteUser = data => {
    switch (data.rol) {
      case "Holder":
        deleteHolder(data.holderid)
          .then(() => {
            toast.success("The delete was successful!");
            getHolders();
          })
          .catch(() => {
            toast.error("An error has ocurred while deleting a holder!");
          });
        break;
      case "Student":
        deleteStudent(data.id)
          .then(() => {
            toast.success("The delete was successful!");
            getStudents();
          })
          .catch(() => {
            toast.error("An error has ocurred while deleting a student!");
          });
        break;
      case "Maestro":
      case "Director":
      case "Secretaria":
      case "Teacher":
      case "Janitor":
      case "Principal":
        deleteEmployee(data.id)
          .then(() => {
            toast.success("The delete was successful!");
            getEmployees();
          })
          .catch(() => {
            toast.error("An error has ocurred while deleting an employee!");
          });
        break;
      default:
        break;
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
      title: "CBU",
      field: "cbu"
    },
    {
      title: "CUIL",
      field: "cuil"
    },
    {
      title: "Rol",
      field: "rol"
    },
    {
      title: "Salary",
      field: "salary"
    },
    {
      title: "Fecha de Ingreso",
      field: "start_date"
    },
    {
      title: "Email",
      field: "email",
      editable: "never"
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
export default UsersList;
