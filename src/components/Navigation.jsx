import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    color: '#cccccc',
    '&:hover':{
      backgroundColor: '#ffffff',
    }
  }
}));

function Navigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Competitive Programming by Dev
          </Typography>
          <Button component={Link} className={classes.navButton} color="default" to="/">Home</Button>
          <Button component={Link} color="default" to="/about">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;