import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.css'

class UserCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    if(this.props.deleteUser!==null) {
      this.deleteUser = this.props.deleteUser.bind(this);
    }
  }

  render() {
    const user = this.props.user;
    const anonymous = "https://png.pngtree.com/svg/20170829/1d9f83ab9c.svg";
    return (
      <div id="user-card" className="row">
        <div className="col-3 col-sm-2 col-lg-1">
          <img
            className="user-photo"
            src={user.photoLink === null ? anonymous : user.photoLink}
               alt=""/>
        </div>
        <div className="col-7 col-sm-9 col-lg-10">
          <Link to={'/user/' + user.id}>
            <p className="user-name">{user.username}</p>
          </Link>
        </div>
        <div className="col-2 col-sm-1">
          <button className="user-card-btn delete-btn btn-outline-danger"
                  hidden={this.props.deleteUser===null}
                  onClick={() => this.deleteUser(user.id)}>
            <i className="fa fa-close"/>
          </button>
        </div>
      </div>
    )
  }
}

export default UserCard
