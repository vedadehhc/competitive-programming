import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(2, 5),
  },
  leftDiv: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  rightDiv: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: 'white',
  },
  break: {
    flexBasis: '100%',
    height: 0,
  }
}));

export const defaultHeight = 150;

export default function BottomBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.bottomBar} style={{height: props.botHeight || defaultHeight}}>
      <div className={classes.leftDiv}>
        <Typography variant='h6'>
          Competitive Programming by Dev
        </Typography>
        <Divider variant='inset' flexItem />
        <div className={classes.break}/>
        <RouterLink className={classes.link}>Home</RouterLink>
        <div className={classes.break}/>
        <RouterLink className={classes.link}>Home</RouterLink>
      </div>
      <div className={classes.rightDiv}>
        <RouterLink className={classes.link}>Home</RouterLink>
      </div>
    </div>
  );
}