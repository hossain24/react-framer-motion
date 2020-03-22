import React, { Component } from 'react';
import './test.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://portfolio-backend24.herokuapp.com/users-db')
            .then(res => res.json())
            .then(users => this.setState({ users: users }, () => {
                console.log('The list of users is fetched ', users);
            }))
    }

    render() {
        return (
            <div className="Test">
                <div className="Test-content">
                    <h1>Users List: </h1>
                    <ul>
                        {this.state.users.map(user =>
                            <li key={user._id}> {user.email} </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Users;