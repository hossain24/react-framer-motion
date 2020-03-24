import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">PortFolio</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Project One</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Peoject Two</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Project Three</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}