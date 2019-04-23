import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import UserService from "../../services/UserService";

class UserInfoRead extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.anonymous = "https://png.pngtree.com/svg/20170829/1d9f83ab9c.svg";
    this.userService = new UserService();

    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);

    this.state = {
      isFollow: false
    };
  }

  componentDidMount() {
    //is follow
  }

  follow() {
    this.userService.follow(this.props.user.id);
    this.setState({
      isFollow: true
    });
  }

  unfollow() {
    this.userService.unfollow(this.props.user.id);
    this.setState({
      isFollow: false
    })
  }

  render() {
    return (
      <div id="user-info-read">
        <div className="username-container row">
          <i className="fa fa-user"/>
          <p>{this.props.user.username}</p>
          <img src={this.props.user.photoLink === null ? this.anonymous : this.props.user.photoLink}
               alt=""/>
          <button hidden={this.state.isFollow
          || this.props.currentUser === undefined
          || this.props.currentUser.userType !== "CUSTOMER_USER"
          || this.props.user.userType === "CUSTOMER_USER"}
                  onClick={this.follow}>
            follow
          </button>
          <button hidden={!this.state.isFollow}
                  onClick={this.unfollow}>
            unfollow
          </button>
        </div>

        <div className="info-container row">
          <i className="fa fa-pencil"/>
          <p className="title">first name:</p>
          <p>{this.props.user.firstName}</p>
        </div>

        <div className="info-container row">
          <i className="fa fa-pencil"/>
          <p className="title">last name:</p>
          <p>{this.props.user.lastName}
          </p>
        </div>

        <div className="info-container row">
          <i className="fa fa-phone"/>
          <p className="title">phone:</p>
          <p>{this.props.user.phone}</p>
        </div>

        <div className="info-container row">
          <i className="fa fa-envelope "/>
          <p className="title">email:</p>
          <p>{this.props.user.email}</p>
        </div>

        <div className="info-container row">
          <i className="fa fa-neuter"/>
          <p className="title">role:</p>
          <p>{this.props.user.userType === "CUSTOMER_USER" ? "customer" :
            this.props.user.userType === "SELLER_USER" ? "seller" : "admin"}</p>
        </div>

        <div className="info-container row">
          <i className="fa fa-home"/>
          <p className="title">address:</p>
          <p>{this.props.user.address}</p>
        </div>

      </div>
    )
  }
}

export default UserInfoRead
