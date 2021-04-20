import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinearScaleIcon from '@material-ui/icons/LinearScale';

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    overflow: 'auto',
  },
  logoDiv: {
    width: 380,
    textAlign: 'left',
  },
  logoButton: {
    padding: theme.spacing(0),
    textAlign: "left",
  },
  logo: {
    margin: theme.spacing(0, 1, 0, 0),
    color: theme.palette.secondary.main,
    float: 'left',
  },
  title: {
    margin: theme.spacing(1, 0, 1),
    textTransform: "none",
    textAlign: "left",
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

  const maxNavHeight = props.maxNavHeight || 100;
  const minNavHeight = props.minNavHeight || 60;
  const navTransitionSpeed = props.navTransition || '0.4s';
  const navShrinkSpeed = props.navSpeed || 1;
  const navShrinkMode = props.navShrinkMode || 'linear'; // 'linear', 'step', 'default' (none)
  const logoRatio = props.logoRatio || .7;

  const [hovered, setHovered] = useState(false);
  const [navHeight, setNavHeight] = useState(maxNavHeight);
  const [navElevation, setNavElevation] = useState(0);

  function handleHovering() {
    setHovered(true);
  }

  function handleUnhovering() {
    setHovered(false);
  }

  function linearInterp() {
    if (minNavHeight === maxNavHeight) {
      return 1;
    }
    return (navHeight - minNavHeight)/(maxNavHeight - minNavHeight);
  }
  
  function scrollFunction() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    switch(navShrinkMode) {
      case 'linear':
        setNavHeight(Math.max(maxNavHeight-navShrinkSpeed*scroll, minNavHeight));
        if(scroll === 0) {
          setNavElevation(0);
        } else {
          setNavElevation(4);
        }
        break;
      case 'step':
        if (navShrinkSpeed*scroll > maxNavHeight-minNavHeight) {
          setNavHeight(minNavHeight);
          setNavElevation(4);
        } else {
          setNavHeight(maxNavHeight);
          setNavElevation(0);
        }
        break;
      default:
    }
  }

  window.onscroll = () => {
    scrollFunction()
  }


  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={navElevation} style={{
        height: navHeight,
        transition: navTransitionSpeed,
      }}>
        <Toolbar style={{
          height: navHeight,
          transition: navTransitionSpeed,
        }}>
          <div>
            <Button component={RouterLink} to="/" className={classes.logoButton}>
              <img src="http://usaco.org/current/images/usaco_logo.png" alt="logo" className={classes.logo} style={{
                height: logoRatio*navHeight,
                transition: navTransitionSpeed,
              }}/>
              <Typography variant="h6" className={classes.title}>
                Competitive Programming by Dev
              </Typography>
            </Button>
          </div>
          <div className={classes.titleDiv}>
            <Typography variant="h5" className={classes.topText} style={{
              fontSize: (1.5+1*linearInterp())+'rem',
              transition: navTransitionSpeed,
            }}>
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
      <Toolbar style={{
        height: navHeight,
        transition: navTransitionSpeed,
      }}/>
    </React.Fragment>
  );
}

export default Navigation;