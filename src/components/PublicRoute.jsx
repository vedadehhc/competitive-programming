import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';
import Navigation, { defaultMinHeight } from './Navigation';
import { Route } from 'react-router-dom';
import BottomBar, { defaultHeight } from './BottomBar';
import Typography from '@material-ui/core/Typography';
import ExitIntentModal from './util/ExitIntentModal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { saveEmailAddress } from './backend/saveEmails';

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

  const [exitEmail, setExitEmail] = useState('');

  function handleExitEmailChange(event) {
    setExitEmail(event.target.value);
  }

  function handleEmailSubmit(event) {
    event.preventDefault();
    saveEmailAddress(exitEmail);
  }

  return (
    <Route
      {...rest}
      render={props =>
        <div className={classes.root}>
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
          <ExitIntentModal>
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
                    autocomplete='email'
                    type='email'
                    required
                    autofocus 
                    placeholder='Email Address' 
                    style={{width: '100%', height:40}}
                    value={exitEmail}
                    onChange={handleExitEmailChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button component="button" type='submit' variant='contained' color='secondary' style={{width:'100%'}}>Sign up</Button>
                </Grid>
              </Grid>
            </form>
          </ExitIntentModal>
        </div>
      }
    />
  );
}