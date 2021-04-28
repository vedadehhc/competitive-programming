import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import Section from "./Section";
import { makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    // display: 'flex',
    flexWrap: 'wrap',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5,1,1),
  },
  courseCard: {
    margin: theme.spacing(0, 0),
    backgroundColor: '#fff',
  },
  courseCardDiv: {
    margin: theme.spacing(0, 10),
  },
  actionButton: {
    margin: theme.spacing(0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const courses = [
  {
    name: 'Competitive Programming Summer Day Camp (USACO Bronze/Silver)',
    date: '6/7/2021 - 6/11/2021',
    time: '1pm ET - 5pm ET',
    cost: '$500',
    description: (<React.Fragment>
      <p>This course aims to prepare motivated students for competing 
      in the USACO Bronze and Silver division contests. Experience in competitive 
      programming helps students with applying to colleges, attaining research 
      and corporate internships, and acing technical coding interviews.</p>
      <p>This course trains students in algorithmic thinking, and helps develop core 
      problem-solving skills. Topics covered include computational complexity, 
      brute force algorithms, sorting, searching, array manipulation, greedy 
      algorithms, and introductory graph theory. </p>
    </React.Fragment>
    ),
    regLink: `https://forms.gle/Ko9kgdVCKHHnf9s6A`,
  },
];

export default function Courses(props) {
  const classes = useStyles();

  const [flyerOpen, setFlyerOpen] = useState(-1);

  return (
    <React.Fragment>
      <Section
        maxWidth='sm'
        className={classes.sectionContainer}
      >
        <Carousel
          autoPlay={false}
          indicators
          navButtonsAlwaysInvisible
          animation='slide'
        >
          {
            courses.map((course, i) => {
              return (
                <div className={classes.courseCardDiv}>
                  <Card key={'course' + i} className={classes.courseCard}>
                    <div style={{textAlign: 'center', marginTop: 20}}>
                      <Typography variant='h5' gutterBottom>{course.name}</Typography>
                      <Typography><i>{course.date}</i></Typography>
                      <Typography><i>{course.time}</i></Typography>
                    </div>
                    <CardContent>
                      {course.description}
                      
                    </CardContent>
                    <CardActions>
                      <div style={{width: '100%', display:'flex', justifyContent: 'flex-end'}}>
                        <Button 
                          className={classes.actionButton} 
                          variant='contained' 
                          color='primary' 
                          onClick={() => setFlyerOpen(i)}
                        >Course Flyer</Button>
                      </div>
                      <div style={{width: '100%', display:'flex', justifyContent: 'flex-start'}}>
                        <Button 
                          className={classes.actionButton} 
                          variant='contained' 
                          color='primary'
                          href={course.regLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >Register</Button>
                      </div>
                    </CardActions>
                  </Card>
                </div>
              );
            })
          }
        </Carousel>
        {
          courses.map((course, i) => {
            return (
              <Backdrop className={classes.backdrop} key={'courseflyer'+i} open={flyerOpen === i} onClick={() => setFlyerOpen(-1)}>
                <iframe title="CourseFlyer" src="https://drive.google.com/file/d/1rlHeCPZFgJ6_uZTJAdxynitVod2vfCE0/preview" style={{width: 640, maxWidth: '80%'}} height='80%'></iframe>
              </Backdrop>
            );
          })
        }
      </Section>
    </React.Fragment>
  );
}