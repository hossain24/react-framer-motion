import React, { Component } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';
import './test.css';

const User = props => (
    <tr>
        <td>{props.user._id}</td>
        <td>{props.user.email}</td>
        <td>{props.user.password}</td>
        {/*  <td>
            <Link to={"/edit/" + props.user._id}>edit</Link> |
            <a href=" " onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td> */}
    </tr>
)

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this)

        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('https://portfolio-backend24.herokuapp.com/users-db')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('https://portfolio-backend24.herokuapp.com/users-db' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    usersList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.currentuser} key={currentuser._id} />;
        })
    }

    render() {
        return (
            <div className="Test">
                <div className="Test-content">
                    <h3>Users List</h3>
                    <p>This list of user is displayed from a database through API.</p>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.usersList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersList;