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
  }
    render() {
        return (
            <div id="home-header">
                <div>
                    <Link to="/city">

                    </Link>
                </div>
                <div>
                    <div className="search-container row">
                        <i className="icon-search"/>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)} />
                    </div>
                </div>
              <Link to="/login"><span className="float-right login-user">{this.state.isLogedin? `My Account`: `Log in`}</span></Link>
            </div>
        )
    }

  componentDidMount() {
    isLogin().then(
        res => {
          this.setState({
            isLogedin: res
          })
        }
    )

  }

    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader
