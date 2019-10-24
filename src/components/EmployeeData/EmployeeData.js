import React from "react";
import Avatar from "react-avatar";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  ListItem,
  Icon
} from "@material-ui/core";

const EmployeeData = ({
  classes,
  name,
  lastname,
  phone,
  address,
  email,
  salary,
  startDate,
  personalData
}) => {
  const { cuil, birthdate, employee_code, rol } = personalData;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Employee Data
      </Typography>
      <div className={classes.container}>
        <div className={classes.header}>
          <Avatar name={`${name} ${lastname}`} round="100px" />
          <Typography className={classes.name} variant="h6" gutterBottom>
            {`${name} ${lastname}`}
          </Typography>
          <Typography className={classes.subtitle} variant="h7" gutterBottom>
            {rol}
          </Typography>
        </div>
        <Divider></Divider>
        <Card className={classes.data}>
          <CardContent className={classes.content}>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">attach_money</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Salary</div>
                <div className={classes.value}>
                  $
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "ARS"
                  }).format(salary)}
                </div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">email</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Email</div>
                <div className={classes.value}>{email}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">person_pin</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Address</div>
                <div className={classes.value}>{address}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">date_range</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Start Date</div>
                <div className={classes.value}>{startDate}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">phone</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Phone</div>
                <div className={classes.value}>{phone}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">account_balance</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Tax ID</div>
                <div className={classes.value}>{cuil}</div>
              </div>
            </ListItem>
            <ListItem className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">cake</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Birthday</div>
                <div className={classes.value}>{birthdate}</div>
              </div>
            </ListItem>
            <ListItem className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">account_box</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Employee Number</div>
                <div className={classes.value}>{employee_code}</div>
              </div>
            </ListItem>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

EmployeeData.propTypes = {};

export default EmployeeData;
