import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  parallaxImage: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 1,
    filter: 'blur(0px)',
    height: '500px',
  },
}));

export default function ParallaxImage({backgroundImage, style, content, ...rest}) {
  const classes = useStyles();


  return (
    <div className={classes.parallaxImage} style={{backgroundImage: backgroundImage, ...style}} {...rest}>
      {content}
    </div>
  );
}