import React from 'react'
import './style.css'
import {hashHistory, Link} from 'react-router'
import {isLogin} from "../../fetch/user/orderlist";

class BackHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogedin: false
    }
  }

  render() {
    return (
        <div id="back-header">
                <span className="back-icon"
                      onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"/>
                </span>
          <h1>{this.props.title}</h1>
          <Link to="/login"><span className="float-right">{this.state.isLogedin? `My Account`: `Log in / Register`}</span></Link>
        </div>
    )
  }

  componentDidMount() {
    isLogin().then(
        res => res.json().then(
          r => {
            let data = r;
            console.log(data)
            this.setState({isLogedin:data})
          }
        )
    )

  }

  clickHandle() {
    const backRouter = this.props.backRouter;
    if (backRouter) {
      hashHistory.push(hashHistory)
    } else {
      window.history.back()
    }
  }
}

export default BackHeader
