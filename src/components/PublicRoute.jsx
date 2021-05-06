import React, { useState, useEffect, lazy, Suspense } from "react";
import { makeStyles } from '@material-ui/core';
import Navigation, { defaultMinHeight } from './Navigation';
import { Route } from 'react-router-dom';
import BottomBar, { defaultHeight } from './BottomBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import saveEmailAddress from './backend/saveEmails';
import CircularProgress from '@material-ui/core/CircularProgress';

import { mobileThreshold } from './../App';
import CustomerChat from './util/fbChat/CustomerChat';

const ExitIntentModal = lazy(() => import('./util/ExitIntentModal'));
const DoneIcon = lazy(() => import('@material-ui/icons/Done'));
const ErrorIcon = lazy(() => import('@material-ui/icons/Error'));
const CloseIcon = lazy(() => import('@material-ui/icons/Close'));
const Snackbar = lazy(() => import('@material-ui/core/Snackbar'));
const IconButton = lazy(() => import('@material-ui/core/IconButton'));

const useStyles = makeStyles((theme) => ({
  root: {
  },
  content: {
    flexGrow: 1,
  },
  bottomBar: {
    position: 'fixed',
  },
}));

export default function PublicRoute({
  component: Component, 
  title, 
  menu, 
  backgroundColor, 
  pagePadding, 
  navProps, 
  botProps,
  ...rest
}) {
  const classes = useStyles();
  const navBarHeight = (navProps && navProps.minNavHeight) || defaultMinHeight;
  const botBarHeight = (botProps && botProps.botHeight) || defaultHeight;

  
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

  const [exitEmail, setExitEmail] = useState('');
  const [exitEmailStatus, setExitEmailStatus] = useState(0); // 0 = not submitted, 1 = loading, 2 = success, 3 = error
  const [exitEmailMessage, setExitEmailMessage] = useState('');
  
  const statusColors = ['', '#aaa', '#4caf50', '#f44336'];

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setExitEmailStatus(0);
  }

  function handleExitEmailChange(event) {
    setExitEmail(event.target.value);
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setExitEmailStatus(1);

    const result = await saveEmailAddress(exitEmail);

    setExitEmailMessage(result.message);

    if(result.success) {
      setExitEmailStatus(2);
    } else {
      setExitEmailStatus(3);
    }
  }

  return (
    <Route
      {...rest}
      render={props =>
        <div className={classes.root}>

          <Suspense fallback={<CircularProgress/>}>  
            <Snackbar open={exitEmailStatus >= 2} autoHideDuration={5000} onClose={handleClose}
              message={exitEmailMessage}
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
              ContentProps={{style: {backgroundColor: statusColors[exitEmailStatus]}}}
            />
          </Suspense>

          <CustomerChat/>

          <Navigation title={title} menu={menu} {...navProps}/>
          <main className={classes.content} style={{
            backgroundColor: (backgroundColor || '#fff'), 
            padding: (pagePadding || '8px'), 
            minHeight: `calc(100vh - ${navBarHeight}px - ${botBarHeight}px)`,
          }}>
            <Component {...props} navProps={navProps}/>
            <br/>
          </main>
          <BottomBar className={classes.bottomBar} {...botProps}/>

          <Suspense fallback={<CircularProgress/>}>
            <ExitIntentModal isMobile={isMobile}>
              <Typography variant='h4' style={{color:'black', textAlign: 'left'}}>Leaving so soon?</Typography>
              <Typography variant='h4' style={{color:'#f55', textAlign: 'left'}}>Sign up for our newsletter first.</Typography>
              <br/>
              <p style={{color:'black', fontSize: 18,}}>
                When you sign up, you will receive updates on our newest competitive programming courses and camps, 
                special discounts, and free resources for competitive programming. 
              </p>
              <p style={{color:'black', fontSize: 24,}}>
                It's free and easy — just enter your email below.
              </p>
              <form style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'center'}} onSubmit={handleEmailSubmit}>
                <Grid container spacing={1} style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <Grid item xs={12} md={8}>
                    <input 
                      autoComplete='email'
                      type='email'
                      required
                      autoFocus 
                      placeholder='Email Address' 
                      style={{width: '100%', height:40}}
                      value={exitEmail}
                      onChange={handleExitEmailChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button 
                      component="button" 
                      type='submit' 
                      variant='contained' 
                      color='secondary' 
                      style={{width:'100%', backgroundColor: statusColors[exitEmailStatus]}}
                      disabled={exitEmailStatus === 1 || exitEmailStatus === 2}
                    >
                      {exitEmailStatus === 0 ? 
                      "Sign up" 
                      : exitEmailStatus === 1 ?
                      <CircularProgress size={25}/>
                      : exitEmailStatus === 2 ?
                      <DoneIcon/>
                      : exitEmailStatus === 3 ?
                      <ErrorIcon/>
                      : "Sign up"
                      }
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </ExitIntentModal>
          </Suspense>
          
        </div>
      }
    />
  );
}