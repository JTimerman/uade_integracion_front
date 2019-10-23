const NAVBAR_ITEMS = {
  LOGOUT: { path: "/logout", name: "Salir" },
  REGISTER_STUDENT: {
    path: "/registerStudent",
    name: "Register Student",
    icon: "group_add"
  },
  REGISTER_EMPLOYEE: {
    path: "/registerEmployee",
    name: "Register Employee",
    icon: "group_add"
  },
  REGISTER_HOLDER: {
    path: "/registerHolder",
    name: "Register Holder",
    icon: "group_add"
  },
  HOME_ADMIN: {
    path: "/homeADMIN",
    name: "Home Admin",
    icon: "home"
  },
  ASSOCIATE_STUDENT: {
    path: "/associate-student",
    name: "Asociar alumno"
  },
  STUDENT_DETAILS: {
    path: "/student-data",
    name: "Student Data",
    icon: "info"
  },
  EMPLOYEE_DETAILS: {
    id: "employeeDetails",
    path: "/employee-data",
    name: "Employee Data",
    icon: "info"
  }
};

export const ROLES_NAVBAR_ITEMS = {
  ADMIN: [
    NAVBAR_ITEMS.HOME_ADMIN,
    NAVBAR_ITEMS.REGISTER_STUDENT,
    NAVBAR_ITEMS.REGISTER_EMPLOYEE,
    NAVBAR_ITEMS.REGISTER_HOLDER
  ],
  HOLDER: [NAVBAR_ITEMS.ASSOCIATE_STUDENT],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
