import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

/* import Navbar from "./components/member/layout/Navbar"; */
import Landing from "./components/member/layout/Landing";
import Register from "./components/member/auth/Register";
import Login from "./components/member/auth/Login";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/member/private-route/PrivateRoute";
import Dashboard from "./components/member/dashboard/Dashboard";

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

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Route component={Navbar} /> */}
            {/* <Route component={Front} /> */}
            <Route component={Animate} />
            <Route component={AnimateTwo} />
            <Route component={AnimateThree} />
            {/*   <Route component={Member} /> */}
            {/*  <Route component={Home} />
          <Route component={About} />
          <Route component={Contact} /> */}
            {/*  <Navbar /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route component={VideoList} />
            <Route component={TestUser} />
            {/*   <Route component={DbUser} /> */}
            <Route component={UsersList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
