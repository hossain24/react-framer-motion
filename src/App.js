import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Front from './components/front/front';
import TestUser from './components/api/test-user';
import DbUser from './components/api/db-user';

class App extends Component {
  render() {
    return (
      <div>
        <Front />
        <Home />
        <About />
        <Contact />
        <TestUser />
        <DbUser />
      </div>
    );
  }
}

export default App;
