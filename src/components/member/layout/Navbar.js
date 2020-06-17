import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../member.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-content">
                    <div className="navbar">
                        <h1>Hill Track</h1>
                        <nav className="z-depth-0">
                            <div className="nav-wrapper white">
                                <Link to="/"
                                    style={{ fontFamily: "monospace" }}
                                    className="col s5 brand-logo center black-text">
                                    Hill Track
                        </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;