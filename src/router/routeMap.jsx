import React from 'react'
import {IndexRoute, Route, Router} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import NotFound from '../containers/404'
import CreateEvent from "../components/CreateEvent"
import AdminforUser from "../components/AdminForUser";
import AdminforEvent from "../components/AdminForEvent"
import Register from '../components/Register'
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
          <Route exact path='/profile' component={UserInfo}/>
          <Route exact path='/profile/:id' component={UserInfo}/>
          <Route exact path='/users/all' component={AdminforUser}/>
          <Route exact path='/events/create/:id' component={CreateEvent}/>
          <Route exact path='/events/all' component={AdminforEvent}/>
          <Route path='*' component={NotFound}/>

        </Route>
      </Router>
    )
  }
}

export default RouterMap
