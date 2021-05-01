import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import {mobileThreshold} from './../App';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import saveEmailAddress from './backend/saveEmails';

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
  [<CallIcon/>, 'tel:704-981-1789'],
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
  const [botEmailStatus, setBotEmailStatus] = useState(0); // 0 = not submitted, 1 = loading, 2 = success, 3 = error
  const [botEmailMessage, setBotEmailMessage] = useState('');
  
  const statusColors = ['', '#aaa', '#4caf50', '#f44336'];

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setBotEmailStatus(0);
  }

  function handleBotEmailChange(event) {
    setBotEmail(event.target.value);
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setBotEmailStatus(1);

    const result = await saveEmailAddress(botEmail);

    setBotEmailMessage(result.message);

    if(result.success) {
      setBotEmailStatus(2);
    } else {
      setBotEmailStatus(3);
    }
  }

  return (
    <div className={classes.bottomBar} style={{minHeight: props.botHeight || defaultHeight}}>

      <Snackbar open={botEmailStatus >= 2} autoHideDuration={5000} onClose={handleClose}
        message={botEmailMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        ContentProps={{style: {backgroundColor: statusColors[botEmailStatus]}}}
      />

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

        <div style={{width: '100%'}}>
          <a href="tel:704-981-1789" className={classes.link}>704-981-1789</a>
        </div>

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
              <Button 
                component="button" 
                type='submit' 
                variant='contained' 
                color='secondary' 
                style={{width:'100%', backgroundColor: statusColors[botEmailStatus]}}
                disabled={botEmailStatus === 1 || botEmailStatus === 2}
              >
                {botEmailStatus === 0 ? 
                "Sign up" 
                : botEmailStatus === 1 ?
                <CircularProgress size={25}/>
                : botEmailStatus === 2 ?
                <DoneIcon/>
                : botEmailStatus === 3 ?
                <ErrorIcon/>
                : "Sign up"
                }
              </Button>
            </Grid>
          </Grid>

        </form>
      </div>
    </div>
  );
}