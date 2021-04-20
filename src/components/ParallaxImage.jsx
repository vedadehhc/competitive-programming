import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  parallaxImage: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: .8,
    height: '100%',
  },
}));

export default function ParallaxImage(props) {
  const classes = useStyles();


  return (
    <React.Fragment>
      <div className={classes.parallaxImage} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/img_parallax.jpg")`}}>
        Hello world!
      </div>
    </React.Fragment>
  );
}