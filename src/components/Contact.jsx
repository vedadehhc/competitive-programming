import React, { useState, useEffect, lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import Section from './util/Section';
import { mobileThreshold } from '../App';
import sendForm from './backend/formResponse';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

const Snackbar = lazy(() => import('@material-ui/core/Snackbar'));
const IconButton = lazy(() => import('@material-ui/core/IconButton'));
const CloseIcon = lazy(() => import('@material-ui/icons/Close'));
const DoneIcon = lazy(() => import('@material-ui/icons/Done'));
const ErrorIcon = lazy(() => import('@material-ui/icons/Error'));


const contactLinks = [
  ['Email:', <EmailIcon/>, 'devmchheda@gmail.com','devmchheda@gmail.com', 'mailto:devmchheda@gmail.com'],
  ['Phone:', <CallIcon/>, '704-981-1789', '704-981-1789', 'tel:704-981-1789'],
  ['Facebook:', <FacebookIcon/>, 'facebook.com/competitive.programming.institute', 
  `facebook.com/\ncompetitive.programming.institute`, 'https://facebook.com/competitive.programming.institute'],
];

export default function Contact(props) {

  const [windowDimension, setWindowDimension] = useState(1000);

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

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleFnameChange(event) {
    setFname(event.target.value);
  }

  function handleLnameChange(event) {
    setLname(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  const [formStatus, setFormStatus] = useState(0); // 0 = not submitted, 1 = loading, 2 = success, 3 = error
  const [formMessage, setFormMessage] = useState(''); 

  const statusColors = ['', '#aaa', '#4caf50', '#f44336'];

  async function handleFormSubmit(event) {
    event.preventDefault();
    setFormStatus(1);

    const result = await sendForm(email, fname, lname, message);
    
    setFormMessage(result.message);

    if(result.success) {
      setFormStatus(2);
    } else {
      setFormStatus(3);
    }
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setFormStatus(0);
  }

  return (
    <React.Fragment>
      
      <Suspense fallback={<CircularProgress/>}>
        <Snackbar open={formStatus >= 2} autoHideDuration={5000} onClose={handleClose}
          message={formMessage}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
          ContentProps={{style: {backgroundColor: statusColors[formStatus]}}}
        />
      </Suspense>


      <div style={{height:30}}/>
      <Section
        maxWidth="md"
      >
        <Typography variant="h4" style={{textAlign: 'left'}}>Get in touch</Typography>
        <div style={{height:20}}/>
        {contactLinks.map((contact, i) => (
          <div className="linkWrap" style={{
            display: 'flex', 
            alignItems: 'center',
          }}>
            <Button 
              component="a" 
              href={contact[4]} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{maxWidth: isMobile ? 36 : '', minWidth: isMobile ? 36 : ''}}
            >
               {contact[1]} {isMobile || (<div style={{marginLeft: 10}}>{contact[0]}</div>)}
            </Button>
            <div 
              style={{marginLeft:5}} 
              className='linkWrap'
            >
              <a 
                href={contact[4]} 
                target="_blank" 
                rel="noopener noreferrer"
              >{isMobile ? contact[3] : contact[2]}</a>
            </div>
          </div>
        ))}
      </Section>
      <div style={{height:40}}/>
      <Section maxWidth="md">
        <Typography variant='h6' style={{color:'#000', textAlign:'left'}}>
          Or, contact us with this form:
        </Typography>
        <div style={{height:20}}/>
        <form onSubmit={handleFormSubmit}>
          <input
            autoComplete='email'
            type='email'
            required
            autoFocus 
            placeholder='Email Address' 
            style={{width: isMobile ? '100%' :'50%',}}
            value={email}
            onChange={handleEmailChange}
          />

          <div style={{height:10}}/>

          <input
            autoComplete='first name'
            type='text'
            required
            placeholder='First Name' 
            style={{width: isMobile ? '100%' :'50%',}}
            value={fname}
            onChange={handleFnameChange}
          />

          <div style={{height:10}}/>

          <input
            autoComplete='last name'
            type='text'
            required
            placeholder='Last Name' 
            style={{width: isMobile ? '100%' :'50%',}}
            value={lname}
            onChange={handleLnameChange}
          />

          <div style={{height:10}}/>

          <textarea
            type='text'
            required
            placeholder='Message' 
            style={{width: isMobile ? '100%' :'50%', height: 200}}
            value={message}
            onChange={handleMessageChange}
          />

          <div style={{height:10}}/>

          <Button 
            component="button" 
            type="submit" 
            variant='contained' 
            color='secondary'
            style={{backgroundColor: statusColors[formStatus], width: isMobile ? '100%' : ''}}
            disabled={formStatus === 1 || formStatus === 2}
          > 
            <Suspense fallback={<CircularProgress size={25}/>}>
              {formStatus === 0 ? 
              <React.Fragment><SendIcon/> <div style={{marginLeft: 10}}>Submit</div></React.Fragment>
              : formStatus === 1 ?
              <CircularProgress size={25}/>
              : formStatus === 2 ?
              <DoneIcon/>
              : formStatus === 3 ?
              <ErrorIcon/>
              : "Sign up"
              }
            </Suspense>
          </Button>
        </form>
      </Section>
    </React.Fragment>
  );
}