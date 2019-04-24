import React from 'react'
import {hashHistory, Link} from 'react-router'
import './style.css'

import SearchInput from '../SearchInput'
import {isLogin} from "../../fetch/user/orderlist";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogedin: false
    }
  }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
              <Link to="/login"><span className="float-right">{this.state.isLogedin? `My Account`: `Log in`}</span></Link>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
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
        hashHistory.push('/search/' + encodeURIComponent(value))
    }
}

export default SearchHeader
