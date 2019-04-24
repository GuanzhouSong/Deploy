import React from 'react'
import {Link} from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class UserItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.user;
    return (
      <tr className="wbdv-template wbdv-user wbdv-hidden">
        <td>
          <Link to={`/profile/` + data.id}>{data.username}</Link>
        </td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.userType === "CUSTOMER_USER" ? "customer" : data.userType === "SELLER_USER" ? "seller" : "admin"}</td>
        <td>
                <span className="float-right">
                  <i className="fa fa-trash-o" onClick={() => this.props.deleteUser(data.id)}/>
                </span>
        </td>
      </tr>
    )
  }
}

export default UserItem
