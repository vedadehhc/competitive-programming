import React, {useState, useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import { Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import {mobileThreshold} from './../App';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    width:'50%',
  },
  rightDiv: {
    flexGrow: 1,
    // display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width:'50%',
  },
  link: {
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  break: {
    flexBasis: '100%',
    height: 0,
  }
}));

export const defaultHeight = 150;

const navLinks = [
  ['Home', '/', <HomeIcon/>], 
  ['About', '/about', <InfoIcon/>],
  // ['Courses', '/courses', <LinearScaleIcon/>],
];

const extraLinks = [
  [<EmailIcon/>, 'mailto:devmchheda@gmail.com'],
  [<FacebookIcon/>, 'https://www.facebook.com/competitive.programming.dev']
];

export default function BottomBar(props) {
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

  const [botEmail, setBotEmail] = useState('');

  function handleBotEmailChange(event) {
    setBotEmail(event.target.value);
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={classes.bottomBar} style={{minHeight: props.botHeight || defaultHeight}}>
      <div className={classes.leftDiv}>
        <Typography variant='h6' style={{color:'white', width:'100%'}}>
          Competitive Programming Institute
        </Typography>

        
        {navLinks.map((text,index) => (
          <div style={{width:'100%'}}>
            <RouterLink 
              className={classes.link} 
              to={text[1]}
            >{text[0]}</RouterLink>
          </div>
        ))}

        <div style={{marginTop: 'auto'}}>
          {extraLinks.map((text,index) => (
            <IconButton 
              href={text[1]}
              className={classes.link}
              target="_blank" 
              rel="noopener noreferrer"
            >{text[0]}</IconButton>
          ))}
        </div>

      </div>
      <div className={classes.rightDiv}>
        <Typography  style={{color:'#f55', textAlign:'right', fontSize: 18,maxWidth:'100%'}}>
          {// isMobile ? "Sign up for our email newsletter!" :
          `Sign up for our email newsletter for new courses and special discounts!`
          }
        </Typography>
        <br/>
        <form style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'flex-end'}} onSubmit={handleEmailSubmit}>
          <Grid container spacing={1} style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <Grid item xs={12} md={8}>
              <input 
                autocomplete='email'
                type='email'
                required
                autofocus 
                placeholder='Email Address' 
                style={{width: '100%'}}
                value={botEmail}
                onChange={handleBotEmailChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button component="button" type='submit' variant='contained' color='secondary' style={{width:'100%'}}>Sign up</Button>
            </Grid>
          </Grid>

        </form>
      </div>
    </div>
  );
}