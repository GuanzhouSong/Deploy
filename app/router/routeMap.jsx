import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import NotFound from '../containers/404'
import CreateEvent from "../components/CreateEvent"
import AdminforUser from "../containers/AdminForUser";
import AdminforEvent from "../containers/AdminForEvent"
import Register from '../components/Register'
import UserCommentList from '../components/UserCommentList'
import UserEventList from '../components/UserEventList'
import UserLikeList from '../components/UserLikeList'
import UserFollowList from '../components/UserFollowList'
import UserInfo from '../components/UserInfo'

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route exact path='/city' component={City}/>
          <Route exact path='/search/:city' component={Search}/>
          <Route exact path='/detail/:id' component={Detail}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/user/:id' component={UserInfo}/>
          <Route exact path='/users/all' component={AdminforUser}/>
          <Route exact path='/events/create/:id' component={CreateEvent}/>
          <Route exact path='/events/all' component={AdminforEvent}/>
          <Route exact path='/event/:id' component={UserEventList}/>
          <Route exact path='/comment/:id' component={UserCommentList}/>
          <Route exact path='/favourite/:id' component={UserLikeList}/>
          <Route exact path='/follow/:id' component={UserFollowList}/>
          <Route path='*' component={NotFound}/>

        </Route>
      </Router>
    )
  }
}

export default RouterMap
