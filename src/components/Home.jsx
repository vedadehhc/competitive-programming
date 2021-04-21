import React, { useRef } from 'react';
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
  header: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const navBarHeight = props.navProps.minNavHeight || defaultMinHeight;

  const sectionRef1 = useRef(null);
  const scrollSectionRef1 = () => window.scrollTo(0, sectionRef1.current.offsetTop - navBarHeight);

  return (
    <React.Fragment>
      <div>
        <ParallaxImage 
          backgroundImage={`url("${process.env.PUBLIC_URL}/images/coding-bgd-slow.gif")`} 
          style={{
            height: '650px',
          }}
        />
        
        <div className={classes.centerContainer}>
          <div className={classes.titleContainer}>
            <Grid container direction="row" spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>Competitive Programming <br/>by Dev Chheda</Typography>
              </Grid>
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
              <Grid item xs={2}/>

              <Grid item xs={5}/>
              <Grid item xs={2} className={classes.centerGrid}>
                <div className='bouncingButton' onClick={scrollSectionRef1}>
                  <IconButton aria-label="down" color='secondary' onClick={scrollSectionRef1}>
                    <ExpandMoreIcon/>
                  </IconButton>
                </div>
              </Grid>
              <Grid item xs={5}/>
            </Grid>
          </div>
        </div>
      </div>
      <div ref={sectionRef1}/>
      <br/>
      <div>
        <Container>
          <Typography className={classes.header} variant="h5">What is Competitive Programming?</Typography>
        </Container>
      </div>
      <div style={{height: '1500px'}}></div>
    </React.Fragment>
  );
}