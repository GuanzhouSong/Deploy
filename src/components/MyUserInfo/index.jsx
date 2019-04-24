import React from 'react'
import UserInfoRead from '../UserInfoRead'
import Index from '../UserInfoEdit'
import BackHomeHeader from '../../components/BackHomeHeader'
import BackHeader from '../../components/BackHeader'
import UserDetail from '../UserDetail'
import Navigator from '../../components/Navigator'
import UserService from '../../services/UserService.jsx'
import PureRenderMixin from "react-addons-pure-render-mixin";
import LoginComponent from "../../containers/Login";
import {hashHistory} from "react-router";

class UserInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.userService = new UserService();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
      </div>
    )
  }


  componentDidMount() {
    this.checkLogin()
  }

  checkLogin() {
    this.userService.findCurrentUser().then(user =>
      hashHistory.push('/profile' + user.id)
    )
  }
}


export default UserInfo
