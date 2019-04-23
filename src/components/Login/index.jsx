import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import {Link} from "react-router";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      username: '',
      password: '',
      role:'customer'
    }
  }

  render() {
    return (
      <div id="login-container">
        <div className="input-container">
          <i className="fa fa-user"/>
          <input
            type="text"
            placeholder="username"
            onChange={this.usernameChanged.bind(this)}
          />
        </div>
        <div className="input-container">
          <i className="fa fa-key"/>
          <input
            type="password"
            placeholder="password"
            onChange={this.passwordChanged.bind(this)}
          />
        </div>
        <div className="input-container">
          <i className="fa fa-neuter"/>
          <select className="role"
                  onChange={this.roleChanged.bind(this)}>
            <option>customer</option>
            <option>seller</option>
            <option>admin</option>
          </select>
        </div>
        <button className="btn-login"
                onClick={this.loginHandle.bind(this)}>
          Login
        </button>
        <Link to="/register"
              className="float-right">
          Sign up
        </Link>
      </div>
    )
  }

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

  roleChanged(event) {
    this.setState(
      {
        role: event.target.value
      });
  }

  loginHandle() {
    const loginHandle = this.props.loginHandle;
    loginHandle(this.state.username,this.state.password,this.state.role);
  }
}

export default Login
