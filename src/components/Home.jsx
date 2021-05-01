import React, { useRef, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import ParallaxImage from './util/ParallaxImage';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import {defaultMinHeight, defaultMaxHeight} from './Navigation';
import Divider from '@material-ui/core/Divider';

import Section from './util/Section';
import TwoColumnSection from './util/TwoColumnSection';
import {mobileThreshold} from './../App';
import saveEmailAddress from './backend/saveEmails';

import './animations.css';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -45%)',
    zIndex: 2,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(50,100,200,.85)',
    maxWidth: '800px',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  centerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    margin: theme.spacing(2),
  },
  sectionContainer: {
    // display: 'flex',
    flexWrap: 'wrap',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5,1,1),
  },
  sectionGrid: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  break: {
    flexBasis: '100%',
    WebkitFlexBasis: '100%',
    height: 0,
  },
  headerLeft: {
    textAlign: 'left',
  },
  headerRight: {
    textAlign: 'right',
  },
  headerDivider: {
    margin: theme.spacing(0, 3),
  },
}));

export default function Home(props) {
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

  const navBarHeight = props.navProps.minNavHeight || defaultMinHeight;
  const navBarMaxHeight = props.navProps.maxNavHeight || defaultMaxHeight;
  // console.log(navBarHeight);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const scrollSectionRef1 = () => window.scrollTo({
    left: 0, 
    top: sectionRef1.current.offsetTop - navBarHeight,
    behavior: 'smooth',
  });

  const scrollSectionRef2 = () => window.scrollTo({
    left: 0, 
    top: sectionRef2.current.offsetTop - navBarHeight,
    behavior: 'smooth',
  });

  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  const [welcomeEmail, setWelcomeEmail] = useState('');
  const [welcomeEmailStatus, setWelcomeEmailStatus] = useState(0); // 0 = not submitted, 1 = loading, 2 = success, 3 = error
  const [welcomeEmailMessage, setWelcomeEmailMessage] = useState('');

  const statusColors = ['', '#aaa', '#4caf50', '#f44336'];

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setWelcomeEmailStatus(0);
  }

  function handleWelcomeEmailChange(event) {
    setWelcomeEmail(event.target.value);
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setWelcomeEmailStatus(1);

    const result = await saveEmailAddress(welcomeEmail);

    setWelcomeEmailMessage(result.message);

    if(result.success) {
      setWelcomeEmailStatus(2);
    } else {
      setWelcomeEmailStatus(3);
    }
  }

  return (
    <React.Fragment>

      <Snackbar open={welcomeEmailStatus >= 2} autoHideDuration={5000} onClose={handleClose}
        message={welcomeEmailMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        ContentProps={{style: {backgroundColor: statusColors[welcomeEmailStatus]}}}
      />

      <div style={{height: '100vh'}}>
        <ParallaxImage 
          backgroundImage={`url("${process.env.PUBLIC_URL}/images/coding-bgd-slow.gif")`} 
          style={{
            height: '100vh',
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'center',
          }}
        >
          
          <div className={classes.centerContainer} style={{height: `calc(100% - ${isMobile ? navBarHeight : navBarMaxHeight}px)`}}>
            <div className={classes.titleContainer}>
              <Grid container direction="row" spacing={2} className={classes.gridContainer}>
                <Grid item xs={12}>
                  <Typography variant={isMobile ? "h5" : "h3"} className={classes.title}>Competitive Programming Institute</Typography>
                </Grid>
                {/*               
                <Grid item xs={2}/>
                <Grid item xs={4}>
                  <Button variant="contained" color="secondary" fullWidth component={RouterLink} to='/about'>
                    About us
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" color="secondary" fullWidth component={RouterLink} to='/courses'>
                    Courses
                  </Button>
                </Grid>
                <Grid item xs={2}/> */}

                <Grid item xs={12} style={{display:'flex', justifyContent: 'center'}}>
                  <Typography variant={isMobile ? 'h6' : 'h5'} style={{color:'#f55', textAlign:'center'}}>
                    Do you want to land internships and jobs at Google, Amazon, Facebook and Netflix?
                    <br/>
                    Do you want to impress top schools like MIT, Stanford, and Harvard? 
                    <br/>
                  </Typography>
                </Grid>

                <Grid item xs={5}/>
                <Grid item xs={2} className={classes.centerGrid}>
                  <Button aria-label="down" className='bouncingButton' style={{color: 'white'}}  onClick={scrollSectionRef2}>
                    <div >
                      <div>Yes!</div>
                      <ExpandMoreIcon/>
                    </div>
                  </Button>
                </Grid>
                <Grid item xs={5}/>
              </Grid>
            </div>
          </div>
        </ParallaxImage>
        
      </div>

      <div style={{height: '1px'}}/>

      <Section 
        onVisChange={(isVisible) => setSection2Visible(isVisible)} 
        ref={sectionRef2}
        maxWidth='md'
        className={classes.sectionContainer}
        transition={React.Fragment}
        isVisible={section2Visible}
      >
        <div style={{display:'flex', justifyContent:'center'}}>
          <Typography variant="h5" style={{textAlign: 'center'}}>Competitive Programming Summer Day Camp (USACO Bronze/Silver)</Typography>
        </div>
        <br/>
        <p>
          This course aims to prepare motivated students for competing in the <a href="http://usaco.org" target="_blank" rel="noopener noreferrer">USACO</a> Bronze and Silver division contests. Experience in competitive programming helps students with applying to colleges, attaining research and corporate internships, and acing technical coding interviews.
        </p>
        <p>
          This course trains students in algorithmic thinking, and helps develop core problem-solving skills. Topics covered include computational complexity, brute force algorithms, sorting, searching, array manipulation, greedy algorithms, and introductory graph theory. 
        </p>

        <br/>

        <Grid container spacing={1} style={{paddingLeft:20,paddingRight:20}}>
          <Grid item xs={12} md={4}>
            <Button 
              href='mailto:devmchheda@gmail.com'
              variant='contained' 
              color='secondary'
              target="_blank" 
              rel="noopener noreferrer"
              style={{width:'100%'}}
            >Email us</Button>
          </Grid>
          
          <Grid item xs={12} md={4} >
            <Button 
              href='https://drive.google.com/file/d/1rlHeCPZFgJ6_uZTJAdxynitVod2vfCE0/view'
              variant='contained' 
              color='secondary'
              target="_blank" 
              rel="noopener noreferrer"
              style={{width:'100%'}}
            >Course flyer</Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button 
              href='https://forms.gle/Ko9kgdVCKHHnf9s6A'
              variant='contained' 
              color='secondary'
              target="_blank" 
              rel="noopener noreferrer"
              style={{width:'100%'}}
            >Register</Button>
          </Grid>
        </Grid>

      </Section>

      <div style={{height: '25px'}}/>
      <Divider variant='middle' />
      <div style={{height: '25px'}}/>

      <Section maxWidth='md'>
        <Typography variant='h5' style={{color:'#f55', textAlign:'center'}}>
          Sign up for our newsletter to receive updates about new competitive programming courses, 
          special discounts, and free resources.
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
                value={welcomeEmail}
                onChange={handleWelcomeEmailChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button 
                component="button" 
                type='submit' 
                variant='contained' 
                color='secondary' 
                style={{width:'100%', backgroundColor: statusColors[welcomeEmailStatus]}}
                disabled={welcomeEmailStatus === 1 || welcomeEmailStatus === 2}
              >
                {welcomeEmailStatus === 0 ? 
                "Sign up" 
                : welcomeEmailStatus === 1 ?
                <CircularProgress size={25}/>
                : welcomeEmailStatus === 2 ?
                <DoneIcon/>
                : welcomeEmailStatus === 3 ?
                <ErrorIcon/>
                : "Sign up"
                }
              </Button>
            </Grid>
          </Grid>

        </form>
      </Section>

      <div style={{height: '40px'}}/>
      <Divider variant='middle' />
      <div style={{height: '10px'}}/>
      
      <TwoColumnSection 
        onVisChange={(isVisible) => setSection1Visible(isVisible)} 
        ref={sectionRef1}
        maxWidth='lg'
        onClickDown={scrollSectionRef2}
        className={classes.sectionContainer}
        transition={React.Fragment}
        isVisible={section1Visible}
        divider
        column1={
          <React.Fragment>
            <Typography className={classes.headerLeft} variant="h5">What is Competitive Programming?</Typography>
            {/* <Divider className={classes.headerDivider}/> */}
            <br/>
            <p>
              Competitive programming is a mind sport in which competitors are given a number of tasks, which they
              attempt to solve by writing computer programs. Solving competitive programming tasks usually requires
              in-depth knowledge of alogrithms and data structures, and, more critically, strong mathematical and 
              logical reasoning skills. 
            </p>
            <p>
              Some of the largest competitive programming contests include 
              the <a href="https://ioinformatics.org/" target="_blank" rel="noopener noreferrer">International Olympiad in Informatics (IOI)</a>
              , the <a href="http://usaco.org" target="_blank" rel="noopener noreferrer">USA Computing Olympiad (USACO)</a>
              , and the <a href="https://icpc.global/" target="_blank" rel="noopener noreferrer">International Colllegiate Programming Contest (ICPC)</a>. 
              There are also a number of online sites which run competitive 
              programming contests, such as <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">Codeforces</a>
              , <a href="https://www.topcoder.com" target="_blank" rel="noopener noreferrer">TopCoder</a>,
               and <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer">CodeChef</a>. 
            </p>
          </React.Fragment>
        }
        column2={
          <React.Fragment>
            <Typography className={classes.headerLeft} variant="h5">Why Competitive Programming?</Typography>
            <br/>
            <p>
              Competitive programming presents a number of benefits for students, amatuers, and experienced programmers alike:
            </p>
            <ul>
              <li>
                Builds and augments core problem-solving skills, with broad benefits even beyond programming
              </li>
              <li>
                Trains students in algorithmic thinking, a critical skill for aspiring programmers
              </li>
              <li>
                Helps students boost their profile when applying to colleges, and attaining research or corporate 
                internships
              </li>
              <li>
                Prepares job-seekers to ace technical coding interviews at software companies such as Google, Facebook, 
                and Amazon
              </li>
            </ul>
          </React.Fragment>
        }
      />

      <div style={{height:100}}/>
    </React.Fragment>
  );
}