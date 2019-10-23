import React, { useState, useEffect } from "react";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  ListItem
} from "@material-ui/core";
import Avatar from "react-avatar";
import styles from "./StudentData.module.css";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import { getHolderById } from "../../services/holders";

const StudentData = ({ personalData }) => {
  console.log("personalData: ", personalData);

  const [holder, setHolder] = useState(null);

  const {
    name,
    lastname,
    phone,
    scholarship_type: scholarshipType,
    address,
    email,
    holder_id: holderId
  } = personalData;
  const fullName = `${name} ${lastname}`;

  useEffect(() => {
    getHolderById(holderId).then(_holder => setHolder(_holder));
  }, [holderId]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Student Data
      </Typography>
      <div className={styles.container}>
        <div className={styles.header}>
          <Avatar name={fullName} round="100px" />
          <Typography className={styles.name} variant="h6" gutterBottom>
            {fullName}
          </Typography>
        </div>
        <Divider></Divider>
        <Card className={styles.data}>
          <CardContent className={styles.content}>
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">face</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Parent</div>
                <div className={styles.value}>
                  {holder ? `${holder.name} ${holder.last_name}` : "Loading..."}
                </div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">email</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Email</div>
                <div className={styles.value}>{email || "-"}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">person_pin</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Address</div>
                <div className={styles.value}>{address || "-"}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">date_range</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Scholarship Type</div>
                <div className={styles.value}>{scholarshipType || "-"}</div>
              </div>
            </ListItem>
            {/* Data */}
            <ListItem className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">phone</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Phone</div>
                <div className={styles.value}>{phone || ""}</div>
              </div>
            </ListItem>
          </CardContent>
        </Card>
        {/* Services */}
        <Card className={clsx(styles.data, styles.services)}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Services availables
            </Typography>
            <ListItem divider className={styles.field}>
              <div className={styles.icon}>
                <Icon color="primary">school</Icon>
              </div>
              <div className="data">
                <div className={styles.label}>Name</div>
                <div className={styles.value}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
            </ListItem>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

StudentData.propTypes = {};

export default StudentData;
