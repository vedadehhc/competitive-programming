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
    maxWidth: 380,
    textAlign: 'left',
    flexShrink: 1,
  },
  logoButton: {
    padding: theme.spacing(0),
    textAlign: "left",
  },
  logo: {
    margin: theme.spacing(0, 1, 0, 0),
    color: theme.palette.secondary.main,
    float: 'left',
    minWidth: 0,
    minHeight: 0,
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

export const defaultMinHeight = 60;
export const defaultMaxHeight = 100;

function Navigation(props) {
  const classes = useStyles();

  const navScrollModes = {
    DEFAULT: "linear",  // default is linear
    NONE: "none",       // no scroll effect
    ELEVATE: "elevate", // elevate without shrinking
    LINEAR: "linear",   // smooth shrinking
    STEP: "step",       // binary shrinking
  };

  const maxNavHeight = props.maxNavHeight || defaultMaxHeight;
  const minNavHeight = props.minNavHeight || defaultMinHeight;
  const navTransitionSpeed = props.navTransition || '0.4s';
  const navShrinkSpeed = props.navSpeed || 1;
  const navScrollMode = props.navScrollMode || navScrollModes.DEFAULT; // 'linear', 'step', 'elevate' (elevation without shrink), 'none'
  const logoRatio = props.logoRatio || .7;

  const noGutter = props.noGutter || false;

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
    switch(navScrollMode) {
      case navScrollModes.NONE:
        break;
      case navScrollModes.ELEVATE:
        if(scroll === 0) {
          setNavElevation(0);
        } else {
          setNavElevation(4);
        }
        break;
      case navScrollModes.LINEAR:
        setNavHeight(Math.max(maxNavHeight-navShrinkSpeed*scroll, minNavHeight));
        if(scroll === 0) {
          setNavElevation(0);
        } else {
          setNavElevation(4);
        }
        break;
      case navScrollModes.STEP:
        if (navShrinkSpeed*scroll > maxNavHeight-minNavHeight) {
          setNavHeight(minNavHeight);
          setNavElevation(4);
        } else {
          setNavHeight(maxNavHeight);
          setNavElevation(0);
        }
        break;
      default:
        break;
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
                maxHeight: logoRatio*navHeight,
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
          <div>
            {navLinks.map((text,index) => (
              <Button component={RouterLink} to={text[1]} 
                className={(props.menu === text[1] && !hovered) ? classes.navButtonSelected : classes.navButton }
                onMouseEnter={handleHovering}
                onMouseLeave={handleUnhovering}
              >{text[0]}</Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      {noGutter || 
        <Toolbar style={{
          height: navHeight,
          transition: navTransitionSpeed,
        }}/>
      }
    </React.Fragment>
  );
}

export default Navigation;