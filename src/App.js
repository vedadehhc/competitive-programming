import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0442a5',
        },
        secondary: {
          main: '#ea6b04',
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <Navigation/>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;