import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navigation, { defaultMinHeight } from './Navigation';
import { Route } from 'react-router-dom';
import BottomBar, { defaultHeight } from './BottomBar';

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
        </div>
      }
    />
  );
}