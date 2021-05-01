import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import '../animations.css';

const useStyles = makeStyles((theme) => ({
  centerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Section = React.forwardRef(({
  children, 
  upButton, 
  onClickUp, 
  upButtonStyle, 
  downButton, 
  onClickDown, 
  downButtonStyle, 
  ...rest}, ref) => 
{
  const classes = useStyles();

  return (
    <Container ref={ref} {...rest}>
      {upButton &&
      <React.Fragment>
        <div className={classes.centerGrid}>
          <IconButton className='bouncingButton' aria-label="up" style={upButtonStyle || {color: 'black'}} onClick={onClickUp}>
            <ExpandLessIcon/>
          </IconButton>
        </div>
        <br/>
      </React.Fragment>
      }
      {children}
      {downButton &&
      <React.Fragment>
        <br/>  
        <div className={classes.centerGrid}>
          <IconButton className='bouncingButton' aria-label="down" style={downButtonStyle || {color: 'black'}} onClick={onClickDown}>
            <ExpandMoreIcon/>
          </IconButton>
        </div>
      </React.Fragment>
      }
    </Container>
  );
});

export default Section;