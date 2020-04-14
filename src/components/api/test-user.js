import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import './api.css';

const User = props => (
    <tr>
        <td>{props.user.id}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
    </tr>
)


class TestUser extends Component {

    constructor(props) {
        super(props);

        this.state = { users: [] };
    }

    componentWillMount() {
        fetch('https://portfolio-backend24.herokuapp.com/hard-coded')
            .then(res => res.json())
            .then(users => this.setState({ users: users }, () => {
                console.log('The list of users is fetched ', users);
            }))
    }


    usersList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} key={currentuser.id} />;
        })
    }

    render() {
        return (
            <div className="Test">
                <div className="Test-content">
                    <h3>Users</h3>
                    <p>This list of user is displayed from an hard coded array through API.</p>
                    <Table striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Firs Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.usersList()}
                        </tbody>
                    </Table>

                    {/* To display the value as listed
                    <ul>
                        {this.state.users.map(user =>
                            <li key={user.id}>Name: {user.firstName} {user.lastName}</li>
                        )}
                    </ul> */}
                </div>
            </div>
        );
    }
}

export default TestUser;