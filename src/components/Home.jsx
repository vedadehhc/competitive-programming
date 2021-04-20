import { makeStyles } from '@material-ui/core';
import React from 'react';
import ParallaxImage from './ParallaxImage';

const useStyles = makeStyles((theme) => ({
  parallaxImage: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ParallaxImage>

      </ParallaxImage>
    </React.Fragment>
  );
}