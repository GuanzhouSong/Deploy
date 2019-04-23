import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../Star'

import './style.less'

class CommentItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const item = this.props.data

    return (
      <div className="comment-item">
        <Star star={item.reviewScore}/>
        <p>{item.text}</p>
      </div>
    )
  }
}

export default CommentItem
