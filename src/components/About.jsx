import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  centerDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    width: 500,
    backgroundColor: '#fff', // theme.palette.secondary.light,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    display: 'block',
  },
  avatarDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    textAlign: "center",
    margin: theme.spacing(1),
  },
  positionText: {
    textAlign: "center",
    fontSize: 16,
  },
  descriptionParagraph: {
    textAlign: 'justify',
  }
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.centerDiv}>
        <Card className={classes.profileCard}>
          <CardContent>
            <div className={classes.avatarDiv}>
              <Avatar className={classes.profileAvatar} src={`${process.env.PUBLIC_URL}/images/Chheda_Dev.JPG`}/>
            </div>
            <br/>
            <Typography variant="h4" className={classes.nameText}>Dev Chheda</Typography>
            <Typography variant="h6" className={classes.positionText}><i>Founder and Lead Instructor</i></Typography>
            <br/>
            <p className={classes.descriptionParagraph}>
              Dev is ranked among the top computing students in the country, 
              and has been competing in the USACO Platinum Division for more 
              than 3 years. He is an ardent programmer, and has published 
              multiple mobile apps, games, and web applications. Dev is 
              currently engaged in cutting-edge research at MIT CSAIL as 
              a long-term collaborator.
            </p>
            <p className={classes.descriptionParagraph}>
              Dev also loves to teach, and has extensive experience coaching 
              middle and high school students. He has assisted Dr. Harold 
              Reiter of UNCC with teaching a college-level Calculus course 
              and multiple competitive math courses for AMC 10/12; Dev has 
              also assisted with coaching the NC State MATHCOUNTS team. Dev 
              has been admitted to both MIT and Stanford to study Computer 
              Science. 
            </p>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}