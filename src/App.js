import React, { Component } from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Front from './components/front/front';
import TestUser from './components/api/test-user';
/* import DbUser from './components/api/db-user'; */
import Navbar from './components/navbar/navbar';
import UsersList from './components/api/db-user-test';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Navbar} />
          <Route component={Front} />
          <Route component={Home} />
          <Route component={About} />
          <Route component={Contact} />
          <Route component={TestUser} />
          {/*   <Route component={DbUser} /> */}
          <Route component={UsersList} />
        </div>
      </Router>
    );
  }
}

export default App;
