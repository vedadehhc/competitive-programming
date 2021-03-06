import React, {useState, useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import {makeStyles} from "@material-ui/core/styles";
import {mobileThreshold} from './../App';

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
    color: 'white',
  },
  titleDiv: {
    flexGrow: 1,
  },
  topText: {
    margin: theme.spacing(0, 2, 0),
    textAlign: "center",
  },
  navButton: {
    color: '#fff',
    '&:hover':{
      color: '#000',
      backgroundColor: '#fff',
    }
  },
  navButtonSelected: {
    color: '#333',
    backgroundColor: '#fff',
    '&:hover':{
      backgroundColor: '#fff',
    }
  },
  navButtonMobile: {
    color: '#fff',
    width: '100%',
  },
  navButtonMobileSelected: {
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
  },
}));


const navLinks = [
  ['Home', '/', <HomeIcon/>], 
  ['About', '/about', <InfoIcon/>],
  ['Contact', '/contact', <ContactSupportIcon/>]
  // ['Courses', '/courses', <LinearScaleIcon/>],
];

const extraLinks = [
  [<EmailIcon/>, 'mailto:devmchheda@gmail.com'],
  [<CallIcon/>, 'tel:704-981-1789'],
  [<FacebookIcon/>, 'https://www.facebook.com/competitive.programming.institute']
];

export const defaultMinHeight = 60;
export const defaultMaxHeight = 100;

function Navigation(props) {
  const classes = useStyles();

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction()
    }
  });

  const isMobile = windowDimension <= mobileThreshold;
  // console.log(isMobile);


  const navScrollModes = {
    DEFAULT: "linear",  // default is linear
    NONE: "none",       // no scroll effect
    ELEVATE: "elevate", // elevate without shrinking
    LINEAR: "linear",   // smooth shrinking
    STEP: "step",       // binary shrinking
  };

  const minNavHeight = props.minNavHeight || defaultMinHeight;
  const maxNavHeight = isMobile ? minNavHeight : (props.maxNavHeight || defaultMaxHeight);
  const navTransitionSpeed = props.navTransition || '0.4s';
  const navShrinkSpeed = props.navSpeed || 1;
  const navScrollMode = props.navScrollMode || navScrollModes.DEFAULT; 
  // const logoRatio = props.logoRatio || .7;

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
      return 0;
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

  

  const [drawerOpen, setDrawerOpen] = useState(false);

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
              {/* <img src="http://usaco.org/current/images/usaco_logo.png" alt="logo" className={classes.logo} style={{
                maxHeight: logoRatio*navHeight,
                transition: navTransitionSpeed,
              }}/> */}
              <Typography variant="h6" className={classes.title}>
                {isMobile ? "CPI" : "Competitive Programming Institute"}
              </Typography>
            </Button>
          </div>
          <div className={classes.titleDiv}>
            <Typography variant="h5" className={classes.topText} style={{
              fontSize: (1.5+1*linearInterp())+'rem',
              transition: navTransitionSpeed,
            }}>
              { /* props.title || "" */ }
            </Typography>
          </div>
          <div>
            {isMobile || navLinks.map((text,index) => (
              <Button key={`navbar-navlink${index}`} component={RouterLink} to={text[1]}
                className={(props.menu === text[1] && !hovered) ? classes.navButtonSelected : classes.navButton }
                onMouseEnter={handleHovering}
                onMouseLeave={handleUnhovering}
              >{text[0]}</Button>
            ))}
            {extraLinks.map((text,index) => (
              <IconButton key={`navbar-extrabutton${index}`} href={text[1]}
                className={(props.menu === text[1] && !hovered) ? classes.navButtonSelected : classes.navButton }
                onMouseEnter={handleHovering}
                onMouseLeave={handleUnhovering}
                target="_blank" 
                rel="noopener noreferrer"
              >{text[0]}</IconButton>
            ))}
            {isMobile && 
              <React.Fragment>
                <IconButton className={classes.navButton} onClick={() => setDrawerOpen(true)}>
                  <MenuIcon/>
                </IconButton>
                <Drawer anchor='top' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  <div style={{height: '100vh', backgroundColor: 'rgb(50,100,200)'}}>
                    <Button
                      onClick={() => setDrawerOpen(false)}
                      className={ classes.navButtonMobile }
                      style={{height: `${Math.floor(100/(navLinks.length+1))}%`, maxHeight: 100}}
                    >
                      <CloseIcon/>
                    </Button>
                    {navLinks.map((text,index) => (
                      <Button key={`navbar-mobile-navlink${index}`} component={RouterLink} to={text[1]}
                        onClick={() => setDrawerOpen(false)}
                        className={ props.menu === text[1] ? classes.navButtonMobileSelected : classes.navButtonMobile }
                        style={{height: `${Math.floor(100/(navLinks.length+1))}%`, maxHeight: 100}}
                      >
                        {text[2]}
                        <div style={{width:20}}/>
                        {text[0]}
                      </Button>
                    ))}
                  </div>
                </Drawer>
              </React.Fragment>
            }
          </div>
        </Toolbar>
      </AppBar>
      {noGutter || 
        <div style={{
          height: navHeight,
          transition: navTransitionSpeed,
        }}/>
      }
    </React.Fragment>
  );
}

export default Navigation;