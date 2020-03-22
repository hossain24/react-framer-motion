import React, { Component } from 'react';
import './about.css';

class About extends Component {
    state = {}
    render() {
        return (
            <div className="About">
                <div className="About-content">
                    <h1>About</h1>
                    <p>This is the about page.</p>
                </div>
            </div>
        );
    }
}

export default About;