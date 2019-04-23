import userinfo from '../../reducers/store';
import React from 'react'
import UserInfoRead from '../UserInfoRead'
import Index from '../UserInfoEdit'
import BackHomeHeader from '../../components/BackHomeHeader'
import BackHeader from '../../components/BackHeader'
import UserDetail from '../UserDetail'
import Navigator from '../../components/Navigator'
import UserService from '../../services/UserService.jsx'
import PureRenderMixin from "react-addons-pure-render-mixin";

class UserInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.userService = new UserService();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.id = parseInt(this.props.params.id);

    this.state = {
      user: {},
      currentUser: {}
    }
  }

  componentWillReceiveProps(newProps) {
    this.userService.findUserById(newProps.params.id).then(user =>
      this.setState({
        user: user
      })
    );
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.userService.findUserById(this.id).then(user =>
      this.setState({
        user: user
      })
    );
    this.userService.findCurrentUser().then(user =>
      this.setState({
        currentUser: user
      })
    )
  }


  render() {
    return (
      <div id="user-info">
        {
          this.state.currentUser === undefined ?
            <UserInfoRead user={this.state.user} currentUser={this.state.currentUser}/>
            : this.state.currentUser.id === this.state.user.id ?
            <div>
              <BackHomeHeader title="My Info"/>
              <Index user={this.state.user}/>
              {/*<Navigator className="footer"*/}
                         {/*user={this.state.user}/>*/}
            </div>
            :
            <div>
              <BackHeader title="User Info"/>
              <UserInfoRead user={this.state.user} currentUser={this.state.currentUser}/>
            </div>
        }
        <UserDetail user={this.state.user} currentUser={this.state.currentUser}/>
        {this.state.currentUser === undefined ? null
          : this.state.currentUser.id === this.state.user.id ?
            <Navigator className="footer" user={this.state.user}/>:null}

      </div>
    )
  }
}


export default UserInfo
