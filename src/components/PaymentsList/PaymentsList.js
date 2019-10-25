import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import MaterialTable from "material-table";

const PaymentsList = ({ getPayments, payments }) => {
  const classes = useStyles();

  useEffect(() => {
    getPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { title: "First name", field: "holderName" },
    { title: "Last name", field: "holderLastName" },
    { title: "Amount", field: "amountPaid" },
    { title: "Payment Method", field: "payment_method" },
    { title: "Date ", field: "formatDate" }
  ];

  return (
    <Paper className={classes.root}>
      <MaterialTable title="Payments" columns={columns} data={payments} />
    </Paper>
  );
};
export default PaymentsList;
