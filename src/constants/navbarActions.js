const NAVBAR_ITEMS = {
  LOGOUT: { path: "/logout", name: "Exit" },
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
  INVOICESANDDUES: {
    path: "/HomeHolder",
    name: "Fees and debts",
    icon: "AttachMoneyIcon"
  },
  PAYMENTS: {
    path: "/Payments",
    name: "Payments",
    icon: "ListIcon"
  },
  PAYAMOUNT: {
    path: "/PayAmount",
    name: "Pay Amount",
    display: false
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
  HOLDER: [
    NAVBAR_ITEMS.INVOICESANDDUES,
    NAVBAR_ITEMS.PAYMENTS,
    NAVBAR_ITEMS.PAYAMOUNT
  ],
  STUDENT: [NAVBAR_ITEMS.STUDENT_DETAILS],
  EMPLOYEE: [NAVBAR_ITEMS.EMPLOYEE_DETAILS]
};
