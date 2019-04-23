import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import UserService from '../../services/UserService.jsx'
import {hashHistory, Link} from "react-router";

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.userService = new UserService();

    this.state = {
      id: 0,
      username: "",
      password: "",
      verifyPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      role: "",
      address: "",
      photoLink: "",
      success: false
    };
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {
    this.setState({
      id: this.props.user.id,
      username: Index.isNull(this.props.user.username)? "" :this.props.user.username,
      password: Index.isNull(this.props.user.password)? "" :this.props.user.password,
      verifyPassword: Index.isNull(this.props.user.password)? "" :this.props.user.password,
      firstName: Index.isNull(this.props.user.firstName) ? "" : this.props.user.firstName,
      lastName: Index.isNull(this.props.user.lastName) ? "" : this.props.user.lastName,
      phone: Index.isNull(this.props.user.phone) ? "" : this.props.user.phone,
      email: Index.isNull(this.props.user.email) ? "" : this.props.user.email,
      role: Index.isNull(this.props.user.userType) ? "" : this.props.user.userType,
      address: Index.isNull(this.props.user.address) ? "" : this.props.user.address,
      photoLink: Index.isNull(this.props.user.photoLink) ? "" : this.props.user.photoLink
    });
  }

  static isNull(attr) {
    return attr === undefined || attr === null;
  }

  logout() {
    this.userService.logout().then(
      this.setState({
          login: false
        }, () => {
          hashHistory.push('/')
        }
      )
    );
  }

  update() {
    if (UpdateInfo.isBlank(this.state.password)) {
      alert("Please input password.");
      return;
    }
    if (UpdateInfo.isBlank(this.state.verifyPassword)) {
      alert("Please verify password.");
      return;
    }
    if (this.state.password.toString() !== this.state.verifyPassword.toString()) {
      alert("Two passwords didn't match");
      return;
    }
    this.userService.updateUser({
      id: this.state.id, username: this.state.username,
      password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName,
      phone: this.state.phone, email: this.state.email, address: this.state.address,
      userType: this.state.role, photoLink: this.state.photoLink
    }).then(user => this.getProfile(user))
      .then(
        this.setState({
          success: true
        })
      )
  };

  passwordChanged(event) {
    this.setState(
      {
        password: event.target.value,
        success: false
      });
  }

  verifyPasswordChanged(event) {
    this.setState(
      {
        verifyPassword: event.target.value,
        success: false
      });
  }

  firstNameChanged(event) {
    this.setState(
      {
        firstName: event.target.value,
        success: false
      }
    );
  }

  lastNameChanged(event) {
    this.setState(
      {
        lastName: event.target.value,
        success: false
      }
    );
  }

  phoneChanged(event) {
    this.setState(
      {
        phone: event.target.value,
        success: false
      }
    );
  }

  emailChanged(event) {
    this.setState(
      {
        email: event.target.value,
        success: false
      }
    );
  }

  addressChanged(event) {
    this.setState(
      {
        address: event.target.value,
        success: false
      }
    );
  }

  photoChanged(event) {
    this.setState(
      {
        photoLink: event.target.value,
        success: false
      }
    );
  }

  static isBlank(val) {
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return (val === "" || re.test(val));
  }


  render() {
    return (

      <div id="userinfo-edit">
        <div>
          <div className="alert alert-success"
               hidden={!this.state.success}>
            Profile successfully saved
          </div>

          <div className="username-container row">
            <i className="fa fa-user"/>
            <p>
              {this.state.username}
            </p>
            <img src={this.state.photoLink} alt="photo"/>
          </div>

          <div className="input-container row">
            <i className="fa fa-key"/>
            <p>password</p>
            <input
              type="password"
              placeholder="password"
              onChange={this.passwordChanged.bind(this)}
              value={this.state.password}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-key"/>
            <p>verify password</p>
            <input
              type="password"
              placeholder="verify password"
              onChange={this.verifyPasswordChanged.bind(this)}
              value={this.state.verifyPassword}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-pencil"/>
            <p>first name</p>
            <input
              type="text"
              placeholder="first name"
              onChange={this.firstNameChanged.bind(this)}
              value={this.state.firstName}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-pencil"/>
            <p>last name</p>
            <input
              type="text"
              placeholder="last name"
              onChange={this.lastNameChanged.bind(this)}
              value={this.state.lastName}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-phone"/>
            <p>phone</p>
            <input
              type="tel"
              placeholder="phone"
              onChange={this.phoneChanged.bind(this)}
              value={this.state.phone}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-envelope"/>
            <p>email</p>
            <input
              type="tel"
              placeholder="email"
              onChange={this.emailChanged.bind(this)}
              value={this.state.email}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-neuter"/>
            <p>role</p>
            <select className="form-control"
                    value={this.state.role}
                    disabled>
              <option value="CUSTOMER_USER">costumer</option>
              <option value="SELLER_USER">seller</option>
              <option value="ADMIN_USER">admin</option>
            </select>
          </div>

          <div className="input-container row">
            <i className="fa fa-home"/>
            <p>address</p>
            <input
              placeholder="address"
              onChange={this.addressChanged.bind(this)}
              value={this.state.address}
            />
          </div>

          <div className="input-container row">
            <i className="fa fa-photo"/>
            <p>photo link</p>
            <input
              placeholder="photo_url"
              onChange={this.photoChanged.bind(this)}
              value={this.state.photoLink}
            />
          </div>

          <div className="btn-container">
            <button className="btn-update"
                    onClick={this.update.bind(this)}>
              update
            </button>
            <button className="btn-logout"
                    onClick={this.logout.bind(this)}>
              logout
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Index
