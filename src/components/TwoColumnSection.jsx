import React, {useState, useEffect} from 'react';
import Section from './Section';
import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import TransitionGridItem from './TransitionGridItem';
import Divider from '@material-ui/core/Divider';

import {mobileThreshold} from './../App';

const useStyles = makeStyles((theme) => ({
  sectionGrid: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    margin: theme.spacing(0, 3),
  },
}));

const TwoColumnSection = React.forwardRef(({
  children,
  column1,
  column2,
  timeout1,
  timeout2,
  transitionStyle1,
  transitionStyle2,
  transition: Transition,
  isVisible,
  divider,
  dividerTimeout,
  dividerTransitionStyle,
  ...rest}, ref) => 
{
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

  const isMobile = windowDimension <= mobileThreshold;

  return (
    <Section {...rest} ref={ref}>
      {children}
      <Grid container className={classes.sectionGrid} spacing={0}>
        <TransitionGridItem 
          xs={isMobile? 10 : 5}
          transition={Transition} 
          isVisible={isVisible} 
          timeout={timeout1 || {enter: 500, exit: 200}} 
          transitionStyle={transitionStyle1 || {transitionDelay: isVisible ? '100ms' : '0ms'}}
        >
          {column1}
        </TransitionGridItem>

        {!divider && !isMobile && 
        <div orientation="vertical" flexItem className={classes.divider}></div>
        }
        
        {divider && !isMobile &&
        <Transition 
          in={isVisible}
          timeout={dividerTimeout || {enter: 700, exit: 200}} 
          style={dividerTransitionStyle || {transitionDelay: isVisible ? '300ms' : '0ms'}}
        >
          <Divider orientation="vertical" flexItem className={classes.divider}/>
        </Transition>
        }

        <TransitionGridItem 
          xs={isMobile? 10 : 5}
          transition={Transition} 
          isVisible={isVisible} 
          timeout={timeout2 || {enter: 900, exit: 200}} 
          transitionStyle={transitionStyle2 || {transitionDelay: isVisible ? '500ms' : '0ms'}}
        >
          {column2}
        </TransitionGridItem>
      </Grid>
    </Section>
  );
});

export default TwoColumnSection;