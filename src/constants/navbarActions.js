const NAVBAR_ITEMS = {
  LOGOUT: { path: "/logout", name: "Logout" },
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
  INVOICESANDDUES: {
    path: "/HomeHolder",
    name: "Fees and debts",
    icon: "attach_money"
  },
  PAYMENTS: {
    path: "/Payments",
    name: "Payments",
    icon: "list"
  },
  PAYAMOUNT: {
    path: "/PayAmount",
    name: "Pay Amount",
    display: false
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
  HOLDER: [
    NAVBAR_ITEMS.INVOICESANDDUES,
    NAVBAR_ITEMS.PAYMENTS,
    NAVBAR_ITEMS.PAYAMOUNT
  ],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
