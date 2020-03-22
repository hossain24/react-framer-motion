import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="Home">
                <div className="Home-content">
                    <h1>Home</h1>
                    <p>This is the home page</p>
                </div>
            </div>
        );
    }
}

export default Home;