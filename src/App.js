import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Home';
import {About} from './About';
import {Projects} from './Projects';
import {Page404} from './Page404';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route path= "/" component={About} />
            <Route path= "/" component={Projects} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
