import React, { useState, useEffect } from "react";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  ListItem
} from "@material-ui/core";
import Avatar from "react-avatar";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";

import { getHolderById } from "../../services/holders";
import ServicesService from "../../services/services";

export default function StudentData({ personalData, classes }) {
  const [holder, setHolder] = useState(null);
  const [services, setServices] = useState([]);

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
    ServicesService.getByStudentId(personalData.id).then(services =>
      setServices(services)
    );
  }, [holderId, personalData.id]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Student Data
      </Typography>
      <div className={classes.container}>
        <div className={classes.header}>
          <Avatar name={fullName} round="100px" />
          <Typography className={classes.name} variant="h6" gutterBottom>
            {fullName}
          </Typography>
        </div>
        <Divider></Divider>
        <Card className={classes.data}>
          <CardContent className={classes.content}>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">face</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Parent</div>
                <div className={classes.value}>
                  {holder ? `${holder.name} ${holder.last_name}` : "Loading..."}
                </div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">email</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Email</div>
                <div className={classes.value}>{email || "-"}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">person_pin</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Address</div>
                <div className={classes.value}>{address || "-"}</div>
              </div>
            </ListItem>
            <ListItem divider className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">date_range</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Scholarship Type</div>
                <div className={classes.value}>{scholarshipType || "-"}</div>
              </div>
            </ListItem>
            <ListItem className={classes.field}>
              <div className={classes.icon}>
                <Icon color="primary">phone</Icon>
              </div>
              <div className="data">
                <div className={classes.label}>Phone</div>
                <div className={classes.value}>{phone || ""}</div>
              </div>
            </ListItem>
          </CardContent>
        </Card>
        <Card className={clsx(classes.data, classes.services)}>
          <CardContent style={{ width: "100%" }}>
            <Typography gutterBottom variant="h6" component="h2">
              Services availables
            </Typography>
            {services.map(({ name, description, id }) => (
              <ListItem key={id} divider className={classes.field}>
                <div className={classes.icon}>
                  <Icon color="primary">school</Icon>
                </div>
                <div className="data">
                  <div className={classes.label}>{name}</div>
                  <div className={classes.value}>{description}</div>
                </div>
              </ListItem>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
