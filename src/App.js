import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import PublicRoute from './components/PublicRoute';
import ScrollToTop from './components/util/ScrollToTopOff';
import Courses from './components/Courses';
import Contact from './components/Contact';

export const mobileThreshold = 800;

class App extends Component {
  
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: 'rgb(50,100,200)',
        },
        secondary: {
          main: '#ffe082',
          // main: '#f55',
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <Router basename="/">
          <ScrollToTop/>
          <Switch>
            <PublicRoute exact 
              path="/" 
              title="Home" 
              menu="/" 
              component={Home}
              navProps={{noGutter: true}}
              pagePadding="0px"
              backgroundColor="#fff"
            />
            <PublicRoute exact 
              path="/about"
              menu="/about" 
              title="About us" 
              component={About} 
              backgroundColor={theme.palette.secondary.main} 
              //navProps={{navScrollMode: "linear"}}
            />
            <PublicRoute exact 
              path="/courses" 
              menu="/courses" 
              title="Courses" 
              component={Courses} 
              backgroundColor={theme.palette.secondary.main} 
            />
            <PublicRoute exact
              path="/contact"
              menu="/contact"
              title="Contact"
              component={Contact}
            />
            <Route render={() => <Redirect to="/" />}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;