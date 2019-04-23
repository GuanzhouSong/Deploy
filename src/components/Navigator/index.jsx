import React from 'react'
import {Link} from 'react-router'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";

class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.id = this.props.user.id;

    this.state = {
      user: {},
      currentUser:{}
    }
  }

  componentDidMount(){
    this.setState({
      user : this.props.user,
      currentUser:this.props.currentUser
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user!== undefined) {
      this.setState({
        user : newProps.user
      })
    }
    if(newProps.currentUser!==undefined){
      this.setState({
        currentUser : newProps.currentUser
      })
    }
  }

  static scrollToAnchor(anchorName) {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  render() {
    return (
      <div id="navigator">
        {console.log(this.props.user.userType)}
        <Link to={"/events/create/" + this.id}
              hidden={this.state.user.userType !== "SELLER_USER"
              ||this.state.user.id!==this.state.currentUser.id}>
          <i className="icon-user"/>
          Create Event
        </Link>
        <a onClick={() => Navigator.scrollToAnchor('user-event')}
           hidden={this.state.user.userType === "ADMIN_USER"}>
          <i className="fa fa-magic"/>
          Events
        </a>
        <a onClick={() => Navigator.scrollToAnchor('user-favourite')}
           hidden={this.state.user.userType !== "CUSTOMER_USER"}>
          <i className="icon-star"/>
          Favourites
        </a>
        <a onClick={() => Navigator.scrollToAnchor('user-comment')}
           hidden={this.state.user.userType !== "CUSTOMER_USER"}>
          <i className="fa fa-pencil"/>
          Comments
        </a>
        <a onClick={() => Navigator.scrollToAnchor('user-follow')}
           hidden={this.state.user.userType !== "CUSTOMER_USER"}>
          <i className="icon-user"/>
          Following
        </a>
        <a onClick={() => Navigator.scrollToAnchor('user-follow')}
           hidden={this.state.user.userType !== "SELLER_USER"}>
          <i className="icon-user"/>
          Followers
        </a>
        <Link to="/events/all"
              hidden={this.state.user.userType !== "ADMIN_USER"}>
          <i className="icon-user"/>
          Manage Event
        </Link>
        <Link to="/users/all"
              hidden={this.state.user.userType !== "ADMIN_USER"
              ||this.state.user.id!==this.state.currentUser.id}>
          <i className="icon-user"/>
          Manage User
        </Link>
        <a onClick={() => window.scrollTo(0, 0)}
           hidden={this.state.user.userType === "ADMIN_USER"
           ||this.state.user.id!==this.state.currentUser.id}>
          <i className="fa fa-arrow-up"/>
        </a>
      </div>
    )
  }

}

export default Navigator
