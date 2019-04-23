import React from 'react'
import {IndexRoute, Link, Route, Router} from 'react-router'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";


class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.id=this.props.user.id;
    this.userType=this.props.user.userType === undefined ?
      "anonymous" : this.props.user.userType
  }

  render() {
    return (
      <div>
        {this.userType === "anonymous" ? <p>Please Login</p> :
          <div id="navigator">
            <Link to={"/events/create/"+this.id}
                  hidden={this.userType !== "SELLER_USER"}>
              <i className="icon-user"/>
              Create Event
            </Link>
            <Link to={"/event/"+this.id}
                  hidden={this.userType === "ADMIN_USER"}>
              <i className="icon-user"/>
              Events
            </Link>
            <Link to={"/favourite/"+this.id}
                  hidden={this.userType !== "CUSTOMER_USER"}>
              <i className="icon-star"/>
              Favourites
            </Link>
            <Link to={"/comment/"+this.id}
                  hidden={this.userType === "ADMIN_USER"}>
              <i className="icon-user"/>
              Comments
            </Link>
            <Link to={"/follow/"+this.id}
                  hidden={this.userType !== "CUSTOMER_USER"}>
              <i className="icon-user"/>
              Following
            </Link>
            <Link to={"/follow/"+this.id}
                  hidden={this.userType !== "SELLER_USER"}>
              <i className="icon-user"/>
              Followers
            </Link>
            <Link to="/events/all"
                  hidden={this.userType !== "ADMIN_USER"}>
              <i className="icon-user"/>
              Manage Event
            </Link>
            <Link to="/users/all"
                  hidden={this.userType !== "ADMIN_USER"}>
              <i className="icon-user"/>
              Manage User
            </Link>
          </div>
        }
      </div>
    )
  }

}

export default Navigator
