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
    path: "/homeAdmin",
    name: "Home Admin",
    icon: "home"
  },
  INVOICESANDDUES: {
    path: "/homeHolder",
    name: "Fees and debts",
    icon: "attach_money"
  },
  ABSENTEEISM: {
    path: "/absenteeism",
    name: "Absenteeism",
    icon: "access_time"
  },
  USERSLIST: {
    path: "/usersList",
    name: "Users list",
    icon: "list"
  },
  PAYMENTS: {
    path: "/payments",
    name: "Payments",
    icon: "list"
  },
  PAYAMOUNT: {
    path: "/payAmount",
    name: "Pay Amount",
    display: false
  },
  STUDENT_DETAILS: {
    path: "/studentPersonalData",
    name: "Student Data",
    icon: "info"
  },
  EMPLOYEE_DETAILS: {
    id: "employeeDetails",
    path: "/employeePersonalData",
    name: "Employee Data",
    icon: "info"
  }
};

export const ROLES_NAVBAR_ITEMS = {
  ADMIN: [
    NAVBAR_ITEMS.HOME_ADMIN,
    NAVBAR_ITEMS.REGISTER_STUDENT,
    NAVBAR_ITEMS.REGISTER_EMPLOYEE,
    NAVBAR_ITEMS.REGISTER_HOLDER,
    NAVBAR_ITEMS.ABSENTEEISM,
    NAVBAR_ITEMS.USERSLIST
  ],
  HOLDER: [
    NAVBAR_ITEMS.INVOICESANDDUES,
    NAVBAR_ITEMS.PAYMENTS,
    NAVBAR_ITEMS.PAYAMOUNT
  ],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
