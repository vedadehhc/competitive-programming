import React, { useRef, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import ParallaxImage from './util/ParallaxImage';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {defaultMinHeight} from './Navigation';

import Section from './util/Section';
import TwoColumnSection from './util/TwoColumnSection';
import {mobileThreshold} from './../App';
import { saveEmailAddress } from './backend/saveEmails';

import './animations.css';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
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

  function handleWelcomeEmailChange(event) {
    setWelcomeEmail(event.target.value);
  }

  function handleEmailSubmit(event) {
    event.preventDefault();
    saveEmailAddress(welcomeEmail);
  }

  return (
    <React.Fragment>
      <div style={{height: '100vh'}}>
        <ParallaxImage 
          backgroundImage={`url("${process.env.PUBLIC_URL}/images/coding-bgd-slow.gif")`} 
          style={{
            height: '100%',
          }}
        />
        
        <div className={classes.centerContainer}>
          <div className={classes.titleContainer}>
            <Grid container direction="row" spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>Competitive Programming Institute</Typography>
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
                <Typography variant='h5' style={{color:'#f55', textAlign:'center'}}>
                  Sign up for our newsletter to receive updates about new competitive programming courses, 
                  special discounts, and free resources.
                </Typography>
              </Grid>

              <Grid item xs={12} style={{display:'flex', marginTop:15, marginBottom:15}}>
                
                <form style={{width: '100%', display:'flex', alignItems:'center'}} onSubmit={handleEmailSubmit}>
                  <input 
                    autocomplete='email'
                    type='email'
                    required
                    autofocus 
                    placeholder='Email Address' 
                    style={{width: '75%', height:'100%', marginRight: '5%'}}
                    value={welcomeEmail}
                    onChange={handleWelcomeEmailChange}
                  />
                  <Button component='button' type='submit' variant='contained' color='secondary' style={{width: '20%', height:'100%'}}>Sign up</Button>
                </form>
              </Grid>

              <Grid item xs={5}/>
              <Grid item xs={2} className={classes.centerGrid}>
                  <IconButton aria-label="down" className='bouncingButton' style={{color: 'white'}} onClick={scrollSectionRef2}>
                    <ExpandMoreIcon/>
                  </IconButton>
              </Grid>
              <Grid item xs={5}/>
            </Grid>
          </div>
        </div>
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
          This course aims to prepare motivated students for competing in the USACO Bronze and Silver division contests. Experience in competitive programming helps students with applying to colleges, attaining research and corporate internships, and acing technical coding interviews.
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

        <div className={classes.centerGrid}>
          <div style={{width: '10%'}}></div>
          <div style={{width: '10%'}}></div>
        </div>
      </Section>

      <div style={{height: '50px'}}/>     
      
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
              Some of the largest competitive programming contests include the 
              International Olympiad in Informatics (IOI), the USA Computing Olympiad (USACO), and the International
              Colllegiate Programming Contest (ICPC). There are also a number of online sites which run competitive 
              programming contests, such as Codeforces, TopCoder, and CodeChef. 
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