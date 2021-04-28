import React from 'react';
import Grid from '@material-ui/core/Grid';


export default function TransitionGridItem({
  children, 
  transition: Transition, 
  transitionProps, 
  isVisible, 
  timeout, 
  transitionStyle, 
  ...rest}) 
{
  return (
    <Transition in={isVisible} timeout={timeout} style={transitionStyle} {...transitionProps}>
      <Grid item {...rest}>
        {children}
      </Grid>
    </Transition>
  );
}