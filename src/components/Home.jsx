import React, { useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link as RouterLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import ParallaxImage from './ParallaxImage';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {defaultMinHeight} from './Navigation';
import Divider from '@material-ui/core/Divider';

import VizSensor from 'react-visibility-sensor'; // or use any other 3rd party plugin or define your own
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

import './animations.css';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(100,100,100,.7)',
    maxWidth: '800px',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  centerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    margin: theme.spacing(2),
  },
  sectionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionGrid: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  break: {
    flexBasis: '100%',
    WebkitFlexBasis: '100%',
    height: 0,
  },
  headerLeft: {
    textAlign: 'left',
  },
  headerRight: {
    textAlign: 'right',
  },
  headerDivider: {
    margin: theme.spacing(0, 3),
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const navBarHeight = props.navProps.minNavHeight || defaultMinHeight;
  console.log(navBarHeight);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const scrollSectionRef1 = () => window.scrollTo({
    left: 0, 
    top: sectionRef1.current.offsetTop - navBarHeight,
    behavior: 'smooth',
  });

  const scrollSectionRef2 = () => window.scrollTo({
    left: 0, 
    top: sectionRef2.current.offsetTop - navBarHeight,
    behavior: 'smooth',
  });

  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  return (
    <React.Fragment>
      <div style={{height: '100%'}}>
        <ParallaxImage 
          backgroundImage={`url("${process.env.PUBLIC_URL}/images/coding-bgd-slow.gif")`} 
          style={{
            height: '100%',
          }}
        />
        
        <div className={classes.centerContainer}>
          <div className={classes.titleContainer}>
            <Grid container direction="row" spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>Competitive Programming <br/>by Dev Chheda</Typography>
              </Grid>
{/*               
              <Grid item xs={2}/>
              <Grid item xs={4}>
                <Button variant="contained" color="secondary" fullWidth component={RouterLink} to='/about'>
                  About us
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="secondary" fullWidth component={RouterLink} to='/courses'>
                  Courses
                </Button>
              </Grid>
              <Grid item xs={2}/> */}

              <Grid item xs={5}/>
              <Grid item xs={2} className={classes.centerGrid}>
                  <IconButton aria-label="down" className='bouncingButton' style={{color: 'white'}} onClick={scrollSectionRef1}>
                    <ExpandMoreIcon/>
                  </IconButton>
              </Grid>
              <Grid item xs={5}/>
            </Grid>
          </div>
        </div>
      </div>
      <div style={{height: '10px'}}/>
      <VizSensor partialVisibility onChange={(isVisible) => {
        setSection1Visible(isVisible);
      }}>
        <Container maxWidth='lg' className={classes.sectionContainer} ref={sectionRef1} style={{height: `calc(100% - ${navBarHeight}px)`}}>
          <Grid container className={classes.sectionGrid}>
            <Grow in={section1Visible} timeout={{enter: 1000, exit: 200}} style={{transitionDelay: section1Visible ? '100ms' : '0ms'}}>
              <Grid item xs={5}>
                <Typography className={classes.headerLeft} variant="h5">What is Competitive Programming?</Typography>
                {/* <Divider className={classes.headerDivider}/> */}
                <br/>
                <p>
                  Competitive programming is a mind sport in which competitors are given a number of tasks, which they
                  attempt to solve by writing computer programs. Solving competitive programming tasks usually requires
                  in-depth knowledge of alogrithms and data structures, and, more critically, strong mathematical and 
                  logical reasoning skills. 
                </p>
                <p>
                  Some of the largest competitive programming contests include the 
                  International Olympiad in Informatics (IOI), the USA Computing Olympiad (USACO), and the International
                  Colllegiate Programming Contest (ICPC). There are also a number of online sites which run competitive 
                  programming contests, such as Codeforces, TopCoder, and CodeChef. 
                </p>
              </Grid>
            </Grow>
            <Grow in={section1Visible} timeout={{enter: 1200, exit: 200}} style={{transitionDelay: section1Visible ? '300ms' : '0ms'}}>
              <Divider orientation="vertical" flexItem className={classes.headerDivider}/>
            </Grow>
            <Grow in={section1Visible} timeout={{enter: 1400, exit: 200}} style={{transitionDelay: section1Visible ? '500ms' : '0ms'}}>
              <Grid item xs={5}>
                <Typography className={classes.headerLeft} variant="h5">Why Competitive Programming?</Typography>
                <br/>
                <p>
                  Competitive programming presents a number of benefits for students, amatuers, and experienced programmers alike:
                </p>
                <ul>
                  <li>
                    Builds and augments core problem-solving skills, with broad benefits even beyond programming
                  </li>
                  <li>
                    Trains students in algorithmic thinking, a critical skill for aspiring programmers
                  </li>
                  <li>
                    Helps students boost their profile when applying to colleges, and attaining research or corporate 
                    internships
                  </li>
                  <li>
                    Prepares job-seekers to ace technical coding interviews at software companies such as Google, Facebook, 
                    and Amazon
                  </li>
                </ul>
              </Grid>
            </Grow>
          </Grid>
          <div className={classes.centerGrid}>    
            <IconButton className='bouncingButton' aria-label="down" style={{color: 'black'}} onClick={scrollSectionRef2}>
              <ExpandMoreIcon/>
            </IconButton>
          </div>
        </Container>
      </VizSensor>
      <div style={{height: '10px'}}/>
      <Divider variant='middle'/>
      <VizSensor partialVisibility onChange={(isVisible) => {
        setSection2Visible(isVisible);
      }}>
        <Container maxWidth='lg' className={classes.sectionContainer} ref={sectionRef2}>
          <Grid container className={classes.sectionGrid}>
            <Grow in={section2Visible} timeout={{enter: 1000, exit: 200}} style={{transitionDelay: section2Visible ? '100ms' : '0ms'}}>
              <Grid item xs={5}>
                <Typography className={classes.headerLeft} variant="h5">What is Competitive Programming?</Typography>
                {/* <Divider className={classes.headerDivider}/> */}
                <br/>
                <p>
                  Competitive programming is a mind sport in which competitors are given a number of tasks, which they
                  attempt to solve by writing computer programs. Solving competitive programming tasks usually requires
                  in-depth knowledge of alogrithms and data structures, and, more critically, strong mathematical and 
                  logical reasoning skills. 
                </p>
                <p>
                  Some of the largest competitive programming contests include the 
                  International Olympiad in Informatics (IOI), the USA Computing Olympiad (USACO), and the International
                  Colllegiate Programming Contest (ICPC). There are also a number of online sites which run competitive 
                  programming contests, such as Codeforces, TopCoder, and CodeChef. 
                </p>
              </Grid>
            </Grow>
            <Grow in={section2Visible} timeout={{enter: 1200, exit: 200}} style={{transitionDelay: section2Visible ? '300ms' : '0ms'}}>
              <Divider orientation="vertical" flexItem className={classes.headerDivider}/>
            </Grow>
            <Grow in={section2Visible} timeout={{enter: 1400, exit: 200}} style={{transitionDelay: section2Visible ? '500ms' : '0ms'}}>
              <Grid item xs={5}>
                <Typography className={classes.headerLeft} variant="h5">Why Competitive Programming?</Typography>
                <br/>
                <p>
                  Competitive programming presents a number of benefits for students, amatuers, and experienced programmers alike:
                </p>
                <ul>
                  <li>
                    Builds and augments core problem-solving skills, with broad benefits even beyond programming
                  </li>
                  <li>
                    Trains students in algorithmic thinking, a critical skill for aspiring programmers
                  </li>
                  <li>
                    Helps students boost their profile when applying to colleges, and attaining research or corporate 
                    internships
                  </li>
                  <li>
                    Prepares job-seekers to ace technical coding interviews at software companies such as Google, Facebook, 
                    and Amazon
                  </li>
                </ul>
              </Grid>
            </Grow>
          </Grid>
          <br/>
          <div className={classes.centerGrid}>    
            <IconButton className='bouncingButton' aria-label="down" style={{color: 'black'}} onClick={scrollSectionRef1}>
              <ExpandMoreIcon/>
            </IconButton>
          </div>
        </Container>
      </VizSensor>
    </React.Fragment>
  );
}