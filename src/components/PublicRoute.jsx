import React from 'react';
import {makeStyles} from '@material-ui/core';
import Navigation from './Navigation';
import Toolbar from '@material-ui/core/Toolbar';
import { Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function PublicRoute({component: Component, title, menu, ...rest}) {
  const classes = useStyles();

  return (
    <Route
      {...rest}
      render={props =>
        <div className={classes.root}>
          <Navigation title={title} menu={menu}/>
          <main className={classes.content}>
            <Component {...props}/>
          </main>
        </div>
      }
    />
  );
}