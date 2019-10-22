import React from "react";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  ListItem
} from "@material-ui/core";
import Avatar from "react-avatar";
import styles from "./EmployeeData.module.css";
import Icon from "@material-ui/core/Icon";

const EmployeeData = ({
  name,
  lastname,
  phone,
  address,
  email,
  salary,
  startDate
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Employee Data
      </Typography>
      <div className={styles.container}>
        <div className={styles.header}>
          <Avatar name={`${name} ${lastname}`} round="100px" />
          <Typography className={styles.name} variant="h6" gutterBottom>
            {`${name} ${lastname}`}
          </Typography>
        </div>
        <Divider></Divider>
        <Card className={styles.data}>
          <CardContent className={styles.content}>
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">attach_money</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Salary</div>
                <div className={styles.value}>${salary}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">email</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Email</div>
                <div className={styles.value}>{email}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">person_pin</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Address</div>
                <div className={styles.value}>{address}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">date_range</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Start Date</div>
                <div className={styles.value}>{startDate}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">phone</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Phone</div>
                <div className={styles.value}>{phone}</div>
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
