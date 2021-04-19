import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './components/Home';
import PublicRoute from './components/PublicRoute';

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
          <Switch>
            <PublicRoute exact path="/" title="Home" menu="/" component={Home} />
            <PublicRoute exact path="/about" menu="/about" title ="About us" component={About} />
            <PublicRoute exact path="/courses" menu="/courses" title ="Courses" component={About} />
            <Route render={() => <Redirect to="/" />}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

const About = () => <h2>About</h2>

export default App;