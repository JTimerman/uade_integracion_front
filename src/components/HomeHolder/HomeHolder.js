import React, { useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles";
import Fab from "@material-ui/core/Fab";

const HomeHolder = props => {
  const classes = useStyles();

  const [students, setStudents] = React.useState([{}]);
  const [currentDate, setCurrentDate] = React.useState();
  const [goPay, setGoPay] = React.useState(false);

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    setCurrentDate(date.toLocaleDateString("en-US", options));
  }, []);

  useEffect(() => {
    setStudents([
      {
        name: "Juan",
        lastname: "Perez"
      },
      {
        name: "Mariano",
        lastname: "Perez"
      }
    ]);
  }, []);

  const handlerClick = event => {
    const mount = event.currentTarget.name;
    setGoPay(true);
    //set redux mount
  };

  if (goPay) return <Redirect to="/PayAmount" />;

  if (students === undefined || students.length === 1) return null;

  return (
    <div>
      {students.map((student, index) => {
        return (
          <Fragment key={index}>
            <Card className={classes.CardHeader}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {student.name.charAt(0)}
                  </Avatar>
                }
                title={student.name + " " + student.lastname}
                subheader={currentDate}
              />
              <CardContent className={classes.CardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total amount: $4000
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Fab
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.margin}
                  onClick={handlerClick}
                  name={4000}
                >
                  <AttachMoneyIcon className={classes.AttachMoneyIcon} />
                  Pay amount
                </Fab>
              </CardActions>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default withStyles(useStyles)(HomeHolder);
