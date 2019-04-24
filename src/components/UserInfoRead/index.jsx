import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'
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
    if (this.props.user.userType === "SELLER_USER"
      && this.props.currentUser !== undefined
      && this.props.currentUser.userType === "CUSTOMER_USER") {
      this.userService.isFollow(this.props.user.id).then(
        isFollow =>
          this.setState({
            isFollow: isFollow
          })
      )
    }
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
          <img className="user-photo" src={this.props.user.photoLink === undefined ? this.anonymous : this.props.user.photoLink}
               alt=""/>
          <p>{this.props.user.username}</p>
          <button className="follow-button btn-danger"
                  hidden={this.state.isFollow
          || this.props.currentUser === undefined
          || this.props.currentUser.userType !== "CUSTOMER_USER"
          || this.props.user.userType === "CUSTOMER_USER"}
                  onClick={this.follow}>
            follow
          </button>
          <button className="follow-button btn-danger"
                  hidden={!this.state.isFollow}
                  onClick={this.unfollow}>
            unfollow
          </button>
        </div>

        <div className="info-container row">
          <i className="info-icon fa fa-pencil"/>
          <p className="info-title">first name:</p>
          <p>{this.props.user.firstName}</p>
        </div>

        <div className="info-container row">
          <i className="info-icon fa fa-pencil"/>
          <p className="info-title">last name:</p>
          <p>{this.props.user.lastName}
          </p>
        </div>

        {/*<div className="info-container row">*/}
          {/*<i className="info-icon fa fa-phone"/>*/}
          {/*<p className="info-title">phone:</p>*/}
          {/*<p>{this.props.user.phone}</p>*/}
        {/*</div>*/}

        <div className="info-container row">
          <i className="info-icon fa fa-envelope "/>
          <p className="info-title">email:</p>
          <p>{this.props.user.email}</p>
        </div>

        <div className="info-container row">
          <i className="info-icon fa fa-neuter"/>
          <p className="info-title">role:</p>
          <p>{this.props.user.userType === "CUSTOMER_USER" ? "customer" :
            this.props.user.userType === "SELLER_USER" ? "seller" : "admin"}</p>
        </div>

        {/*<div className="info-container row">*/}
          {/*<i className="info-icon fa fa-home"/>*/}
          {/*<p className="info-title">address:</p>*/}
          {/*<p>{this.props.user.address}</p>*/}
        {/*</div>*/}

      </div>
    )
  }
}

export default UserInfoRead
