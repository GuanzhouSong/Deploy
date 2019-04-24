import React from 'react'
import UserItem from "../UserItem"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import BackHeader from "../../components/BackHeader";
import UserService from '../../services/UserService.jsx'

class AdminforUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };

    this.userService = new UserService();
    this.getUsers = this.getUsers.bind(this);
    this.renderListOfUsers = this.renderListOfUsers.bind(this);
    this.deleteAUser = this.deleteAUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    console.log("GetUsers!");
    this.userService.findAllUsers().then(users =>
      this.setState({userData: users})
    );
  }

  deleteAUser(uid) {
    this.userService.deleteUser(uid);
      this.setState({
        userData: [
          ...this.state.userData.filter(
            user => user.id !== uid
          )
        ]
      })
  }


  renderListOfUsers() {
    let users = null;
    if (this.state) {
      users = this.state.userData.map(
        (user) => {
          return <UserItem key={user.id} user={user}
                           deleteUser={this.deleteAUser}/>
        });
    }
    return (
      users
    )
  }

  render() {
    return (
      <div >
        <BackHeader title="Manage User"/>
        <table className="table">
          <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody className="wbdv-tbody" id="realBody">
          {this.renderListOfUsers()}
          </tbody>
        </table>

      </div>
    )
  }

}

export default AdminforUser
