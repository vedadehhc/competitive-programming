import React from 'react';
import {makeStyles} from '@material-ui/core';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function PublicRoute({component: Component, title, menu, backgroundColor, ...rest}) {
  const classes = useStyles();

  return (
    <Route
      {...rest}
      render={props =>
        <div className={classes.root}>
          <Navigation title={title} menu={menu}/>
          <main className={classes.content} style={{backgroundColor: backgroundColor || '#fff'}}>
            <Component {...props}/>
          </main>
        </div>
      }
    />
  );
}