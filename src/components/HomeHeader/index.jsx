import React from 'react'
import {hashHistory, Link} from 'react-router'
import './style.css'
import {isLogin} from "../../fetch/user/orderlist";

class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogedin: false
    }
    this.checkLogin.bind(this)
  }

  render() {
    return (
      <div id="home-header">
        <div>
          <Link to="/city">

          </Link>
        </div>
        <div>
          <h1>YEVELP</h1>
        </div>
        <Link to="/login"><span
          className="float-right">{this.state.isLogedin ? `My Account` : `Log in / Register`}</span></Link>
      </div>
    )
  }


  componentDidMount() {
    isLogin().then(
      res => res.json().then(
        r => {
          let data = r;
          this.setState({
            isLogedin: data
          })
        }
      )
    )

  }


  checkLogin() {
    isLogin().then(
      res => res.json().then(
        r => {
          let data = r;
          console.log(data)
          this.setState({
            isLogedin: data
          })
        }
      )
    )
  }

  enterHandle(value) {
    hashHistory.push('/search/' + encodeURIComponent(value))

  }
}

export default HomeHeader
