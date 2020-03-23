import React, { Component } from 'react';
import './test.css';

class TestUser extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://portfolio-backend24.herokuapp.com/hard-coded')
            .then(res => res.json())
            .then(users => this.setState({ users: users }, () => {
                console.log('The list of users is fetched ', users);
            }))
    }

    render() {
        return (
            <div className="Test">
                <div className="Test-content">
                    <h3>Users List</h3>
                    <p>This list of user is displayed from an hard coded array through API.</p>
                    <ul>
                        {this.state.users.map(user =>
                            <li key={user.id}>Name: {user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TestUser;