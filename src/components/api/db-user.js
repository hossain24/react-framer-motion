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

    /*  userList() {
         return this.state.users.map(currentuser => {
             return <User user={currentuser} key={currentuser._id} />;
         })
     } */

    render() {
        return (
            <div className="Test">
                <div className="Test-content">
                    <h3>Users List: </h3>

                    <table className="table">
                        <thead className="thead-light">
                            {this.state.users.map(user =>
                                <tr key={user.id}>
                                    <th>ID: {user._id} </th>
                                    <th>Email: {user.email}</th>
                                    <th>Password: {user.password}</th>
                                </tr>)}
                        </thead>

                    </table>

                    {/*  <ul>
                        {this.state.users.map(user =>
                            <li key={user.id}> ID: {user._id} Email: {user.email} Password: {user.password}</li>
                        )}
                    </ul> */}
                </div>
            </div>
        );
    }
}

export default Users;