import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

/* import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact'; */
/* import Front from './components/front/front'; */
import TestUser from './components/api/test-user';
/* import DbUser from './components/api/db-user'; */
/* import Navbar from './components/navbar/navbar'; */
import UsersList from './components/api/db-user-test';
import VideoList from './components/youtube-api/video-list';
import Animate from './components/animate/animate';
import AnimateTwo from './components/animate/animate-two';
import AnimateThree from './components/animate/animate-three';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route component={Navbar} /> */}
          {/* <Route component={Front} /> */}
          <Route component={Animate} />
          <Route component={AnimateTwo} />
          <Route component={AnimateThree} />
          {/*  <Route component={Home} />
          <Route component={About} />
          <Route component={Contact} /> */}
          <Route component={VideoList} />
          <Route component={TestUser} />
          {/*   <Route component={DbUser} /> */}
          <Route component={UsersList} />
        </div>
      </Router>
    );
  }
}

export default App;
