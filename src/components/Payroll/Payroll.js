import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Typography, CardContent, Card, Divider } from "@material-ui/core";
import styles from "./Payroll.module.css";

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

  const months = useMemo(() => {
    return Object.keys(payroll).map(monthNumber => {
      const month = monthNames[monthNumber - 1];
      return {
        month,
        ...payroll[monthNumber]
      };
    });
  }, [payroll]);

  console.log("months: ", months);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payroll
      </Typography>
      <div className={styles.payrolls}>
        {months.length === 0
          ? "There are no payments recorded"
          : months.map(({ month, total, billed, pending }) => [
              <Card key={month} className={styles.card}>
                <CardContent className={styles.content}>
                  <div>
                    <Typography bold variant="h6" gutterBottom>
                      Month
                    </Typography>
                    <Typography variant="h8" gutterBottom>
                      {month}
                    </Typography>
                    <Divider></Divider>
                  </div>
                  <div>
                    <Typography bold variant="h6" gutterBottom>
                      Total to pay
                    </Typography>
                    <Typography variant="h8" gutterBottom>
                      ${total}
                    </Typography>
                    <Divider></Divider>
                  </div>
                  <div>
                    <Typography bold variant="h6" gutterBottom>
                      Salaries payed
                    </Typography>
                    <Typography color="green" variant="h8" gutterBottom>
                      {billed}
                    </Typography>
                    <Divider></Divider>
                  </div>
                  <div>
                    <Typography bold variant="h6" gutterBottom>
                      Salaries pending to pay
                    </Typography>
                    <Typography color="red" variant="h8" gutterBottom>
                      {pending}
                    </Typography>
                    <Divider></Divider>
                  </div>
                </CardContent>
              </Card>
            ])}
      </div>
    </>
  );
};

Payroll.propTypes = {};

export default Payroll;
