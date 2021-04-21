import React from 'react';
import {makeStyles} from '@material-ui/core';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    flexGrow: 1,
    height: '100%',
  },
}));

export default function PublicRoute({
  component: Component, 
  title, 
  menu, 
  backgroundColor, 
  pagePadding, 
  navProps, 
  ...rest
}) {
  const classes = useStyles();

  return (
    <Route
      {...rest}
      render={props =>
        <div className={classes.root}>
          <Navigation title={title} menu={menu} {...navProps}/>
          <main className={classes.content} style={{backgroundColor: (backgroundColor || '#fff'), padding: (pagePadding || '8px')}}>
            <Component {...props} navProps={navProps}/>
          </main>
        </div>
      }
    />
  );
}