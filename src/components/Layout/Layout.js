import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "react-avatar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import HomeIcon from "@material-ui/icons/Home";
import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListIcon from "@material-ui/icons/List";
import Icon from "@material-ui/core/Icon";
const Layout = ({ children, classes, name, lastname, role }) => {
  const [open, setOpen] = React.useState(true);
  const currentUserNavbarItems = ROLES_NAVBAR_ITEMS[role] || [];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlerClick = () => {};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Escuela
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.profile}>
          <Avatar name={name} round="100px" />
          <Typography variant="h6" noWrap>
            {`${name} ${lastname}`}
          </Typography>
          <Typography variant="subtitle1" noWrap>
            {role}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to={"/logout"}
          >
            Salir
          </Button>
        </div>
        <Divider />
        <List>
          {currentUserNavbarItems.map(({ path, name, icon }, index) => {
            return (
              <ListItem
                button
                component={Link}
                to={path}
                key={name}
                onClick={handlerClick}
              >
                {icon && (
                  <ListItemIcon>
                    <Icon>{icon}</Icon>
                  </ListItemIcon>
                )}
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
