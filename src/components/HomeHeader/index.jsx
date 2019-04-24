import React from 'react'
import {hashHistory, Link} from 'react-router'
import SearchInput from '../SearchInput'
import './style.css'
import {isLogin} from "../../fetch/user/orderlist";

class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogedin: false
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> parent of 413f7ff... login
=======
>>>>>>> parent of 413f7ff... login
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
              <Link to="/login"><span className="float-right login-user">{this.state.isLogedin? `My Account`: `Log in`}</span></Link>
            </div>
        )
    }
<<<<<<< HEAD


=======
>>>>>>> parent of 413f7ff... login

  componentDidMount() {
    isLogin().then(
        res => {
          this.setState({
            isLogedin: res
          })
        }
    )

  }

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
>>>>>>> parent of 413f7ff... login
=======
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
>>>>>>> parent of 413f7ff... login
}

export default HomeHeader
