import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import UserService from '../../services/UserService.jsx'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import BackHomeHeader from '../../components/BackHomeHeader'
import LoginComponent from '../../components/Login'


class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.userService = new UserService();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <BackHomeHeader title="Login"/>
        {
          <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }


  componentDidMount() {
    this.checkLogin()
  }

  checkLogin() {
    this.userService.findCurrentUser().then(user =>
      user === undefined ? null : hashHistory.push('/user/'+user.id)
    )
  }


  loginHandle(username, password, role) {
    this.userService.login(username, password, role).then(user =>
        user === undefined ? alert("Username or password is incorrect.") :
          hashHistory.push('/user/'+user.id)
    )
  }

}

// -------------------redux react--------------------

const mapStateToProps = (state) => ({
  userinfo: state.userinfo
})

const mapDispatchToProps = (dispatch) => ({
  userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
