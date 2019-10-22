const NAVBAR_ITEMS = {
  LOGOUT: { path: "/logout", name: "Salir" },
  REGISTERSTUDENT: {
    path: "/registerStudent",
    name: "Register Student",
    icon: "GroupAddIcon"
  },
  REGISTEREMPLOYEE: {
    path: "/registerEmployee",
    name: "Register Employee",
    icon: "GroupAddIcon"
  },
  REGISTERHOLDER: {
    path: "/registerHolder",
    name: "Register Holder",
    icon: "GroupAddIcon"
  },
  HOMEADMIN: {
    path: "/homeADMIN",
    name: "Home Admin",
    icon: "HomeIcon"
  },
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
  ADMIN: [
    NAVBAR_ITEMS.HOMEADMIN,
    NAVBAR_ITEMS.REGISTERSTUDENT,
    NAVBAR_ITEMS.REGISTEREMPLOYEE,
    NAVBAR_ITEMS.REGISTERHOLDER
  ],
  HOLDER: [NAVBAR_ITEMS.ASSOCIATE_STUDENT],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
