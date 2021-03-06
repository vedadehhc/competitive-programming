import React, {useState, useEffect} from 'react';
import Section from './Section';
import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import {mobileThreshold} from '../../App';

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
  divider,
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
        <Grid item xs={isMobile? 10 : 5}>
          {column1}
        </Grid>

        {!divider && !isMobile && 
        <div orientation="vertical" flexItem className={classes.divider}></div>
        }
        
        {divider && !isMobile &&
          <Divider orientation="vertical" flexItem className={classes.divider}/>
        }

        <Grid item xs={isMobile? 10 : 5}>
          {column2}
        </Grid>
      </Grid>
    </Section>
  );
});

export default TwoColumnSection;