import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../Star'

import './style.less'

class CommentItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className="comment-item">
        <h3 hidden={this.props.user.userType === "SELLER_USER"}>
          <i className="icon-user"/>
          &nbsp;
          {comment.username}
        </h3>
        <h3 hidden={this.props.user.userType === "CUSTOMER_USER"}>
          <i className="icon-user"/>
          &nbsp;
          {comment.sellerName}
        </h3>
        <Star star={comment.star}/>
        <p>{comment.comment}</p>
      </div>
    )
  }
}

export default CommentItem
