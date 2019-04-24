import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'
import {hashHistory, Link} from "react-router";
import UserService from '../../services/UserService.jsx'
import BackHeader from '../BackHeader'

class Register extends React.Component {
  constructor(props, context) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.userService = new UserService();

    this.state = {
      username: "",
      password: "",
      verifyPassword: "",
      role: "customer"
    };
  }

  register() {
    if (Register.isBlank(this.state.username)) {
      alert("Please input username.");
      return;
    }
    if (Register.isBlank(this.state.password)) {
      alert("Please input password.");
      return;
    }
    if (this.state.password.toString() !== this.state.verifyPassword.toString()) {
      alert("Two passwords didn't match");
      return;
    }
    this.userService.register(this.state.username, this.state.password, this.state.role).then(
      this.setState({}
        , () => {
          // const params = this.props.params;
          // const router = params.router;
          // if (router) {
          //   hashHistory.push(router)
          // } else {
          hashHistory.push('/Profile')
          // }
        }
      )
    ).catch(() =>
      alert("Username already existed.")
    );
  };

  usernameChanged(event) {
    this
      .setState(
        {
          username: event.target.value
        }
      );
  }

  passwordChanged(event) {
    this.setState(
      {
        password: event.target.value
      });
  }

  verifyPasswordChanged(event) {
    this.setState(
      {
        verifyPassword: event.target.value
      });
  }

  roleChanged(event) {
    this.setState(
      {
        role: event.target.value
      });
  }

  static isBlank(val) {
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return (val === "" || re.test(val));
  }

  render() {
    return (
      <div>
        <BackHeader title="Register"/>
        <div id="register-container">
          <div className="input-container">
            <i className="fa fa-user"/>
            <input
              type="text"
              placeholder="username"
              onChange={this.usernameChanged.bind(this)}
              value={this.state.username}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-key"/>
            <input type="password"
                   placeholder="password"
                   onChange={this.passwordChanged.bind(this)}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-key"/>
            <input type="password"
                   placeholder="verify password"
                   onChange={this.verifyPasswordChanged.bind(this)}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-neuter"/>
            <select className="role"
                    onChange={this.roleChanged.bind(this)}>
              <option value='customer'>customer</option>
              <option value='seller'>seller</option>
              <option value='admin'>admin</option>
            </select>
          </div>
          <button className="btn-register"
                  onClick={this.register.bind(this)}>
            Register
          </button>
          <Link to="/login"
                className="float-right">
            Login
          </Link>
        </div>
      </div>
    )
  }

}

export default Register
