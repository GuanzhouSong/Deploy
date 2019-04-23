import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import BackHeader from "../BackHeader";
import UserService from "../../services/UserService";
import UserCard from "../../components/UserCard";


class Index extends React.Component {

  constructor(props) {
    super(props);

    this.userService = new UserService();
    this.id = parseInt(this.props.params.id);
    console.log(this.id)
    this.getUsers = this.getUsers.bind(this);
    this.renderListOfUsers = this.renderListOfUsers.bind(this);
    this.unfollow = this.unfollow.bind(this);

    this.state = {
      data: [],
      currentUser: {},
      user: {}
    };
  }

  componentDidMount() {
    this.checkLogin();
    this.getUsers();
  }

  getUsers() {
    this.userService.findUserById(this.id).then(user =>
      this.setState({
          user: user
        }
        , () =>
          this.state.user.userType === "CUSTOMER_USER" ?
            this.userService.findFollowing(this.state.user.id).then(users =>
              this.setState({
                data: users
              })
            )
            : this.userService.findFollower(this.state.user.id).then(users =>
              this.setState({
                data: users
              })
            )
      )
    )
  }

  checkLogin() {
    this.userService.findCurrentUser().then(user =>
      this.setState({
        currentUser: user
      })
    )
  }

  unfollow(uid) {

  }


  renderListOfUsers() {
    let users = null;
    if (this.state) {
      users = this.state.data.map(
        (user) => {
          return <UserCard key={user.id}
                           user={user}
                           deleteUser={this.state.currentUser === undefined ?
                             null : this.state.currentUser.id === this.id
                             && this.state.currentUser.userType === "CUSTOMER_USER" ?
                               this.unfollow : null}/>
        });
    }
    return (
      users
    )
  }

  render() {
    return (
      <div>
        <BackHeader title={this.state.user.userType === "CUSTOMER_USER" ? "Following" : "Followers"}/>
        {this.renderListOfUsers()}
      </div>
    )
  }
}

export default Index
