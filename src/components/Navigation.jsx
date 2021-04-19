import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from '@material-ui/core';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinearScaleIcon from '@material-ui/icons/LinearScale';

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    overflow: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1, 0, 1),
    textTransform: "none",
  },
  titleDiv: {
    flexGrow: 1,
  },
  topText: {
    margin: theme.spacing(0, 2, 0),
    textAlign: "center",
  },
  navButton: {
    color: '#000',
    '&:hover':{
      backgroundColor: '#fff',
    }
  },
  navButtonSelected: {
    color: '#333',
    backgroundColor: '#fff',
    '&:hover':{
      backgroundColor: '#fff',
    }
  }
}));

const navLinks = [
  ['Home', '/', <HomeIcon/>], 
  ['About', '/about', <InfoIcon/>],
  ['Courses', '/courses', <LinearScaleIcon/>],
];

function Navigation(props) {
  const classes = useStyles();

  const [hovered, setHovered] = useState(false);

  function handleHovering() {
    setHovered(true);
  }

  function handleUnhovering() {
    setHovered(false);
  }

  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Button component={RouterLink} to="/">
            <Typography variant="h6" className={classes.title}>
              Competitive Programming by Dev
            </Typography>
          </Button>
          <div className={classes.titleDiv}>
            <Typography variant="h5" className={classes.topText}>
              {props.title || ""}
            </Typography>
          </div>
          {navLinks.map((text,index) => (
            <Button component={RouterLink} to={text[1]} 
              className={(props.menu === text[1] && !hovered) ? classes.navButtonSelected : classes.navButton }
              onMouseEnter={handleHovering}
              onMouseLeave={handleUnhovering}
            >{text[0]}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
  );
}

export default Navigation;