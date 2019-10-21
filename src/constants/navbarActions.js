const NAVBAR_ITEMS = {
  LOGOUT: { path: "/logout", name: "Salir" },
  REGISTER: { path: "/register", name: "Registrar usuario" },
  ASSOCIATE_STUDENT: {
    path: "/associate-student",
    name: "Asociar alumno"
  },
  STUDENT_DETAILS: {
    path: "/student-details",
    name: "Datos personales"
  },
  EMPLOYEE_DETAILS: {
    id: "employeeDetails",
    path: "/employee-details",
    name: "Datos personales y laborales"
  }
};

export const ROLES_NAVBAR_ITEMS = {
  ADMIN: [NAVBAR_ITEMS.REGISTER],
  HOLDER: [NAVBAR_ITEMS.ASSOCIATE_STUDENT],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
