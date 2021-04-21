import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import PublicRoute from './components/PublicRoute';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#80deea',
        },
        secondary: {
          main: '#ffe082',
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
              component={About} 
            />
            <Route render={() => <Redirect to="/" />}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;