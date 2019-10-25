import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  CardContent,
  Card,
  Divider,
  Icon
} from "@material-ui/core";
import styles from "./Payroll.module.css";
import clsx from "clsx";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Payroll = ({ payroll, getPayroll }) => {
  console.log("payroll: ", payroll);
  useEffect(() => {
    getPayroll().then(s => console.log(s));
  }, [getPayroll]);
  if (!payroll)
    return (
      <Typography variant="h6" gutterBottom>
        There are no payrolls for this month
      </Typography>
    );
  const { total, facturada: billed, fecha } = payroll;

  let monthName;
  if (fecha) {
    const date = new Date(fecha);
    const monthNumber = date.getMonth();
    monthName = monthNames[monthNumber];
  }

  const icon = billed ? (
    <Icon className={clsx(styles.icon, styles.ok)}>done</Icon>
  ) : (
    <Icon className={clsx(styles.icon, styles.pending)}>av_timer</Icon>
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payroll
      </Typography>
      <div className={styles.payrolls}>
        <Card className={styles.card}>
          <CardContent className={styles.content}>
            <div>
              <Typography bold variant="h6" gutterBottom>
                Month
              </Typography>
              <Typography variant="h8" gutterBottom>
                {monthName}
              </Typography>
            </div>
            <div>
              <Typography bold variant="h6" gutterBottom>
                Total to pay
              </Typography>
              <Typography variant="h8" gutterBottom>
                ${total}
              </Typography>
            </div>
            <div>{icon}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

Payroll.propTypes = {};

export default Payroll;
