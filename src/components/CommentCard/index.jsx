import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../Star'

import './style.less'
import EventService from "../../services/EventService";
import UserService from "../../services/UserService";

class CommentItem extends React.Component {
  constructor(props, context) {

    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.eventService = new EventService();
    this.userService = new UserService();

    this.findEventById = this.findEventById.bind(this)

    this.state = {
      eventName: "",
      customerName: ""
    }
  }

  componentWillReceiveProps(newProps) {
    const comment = this.props.comment;
    if (newProps.comment !== undefined) {
      this.eventService.findEventById(comment.reviewId.eventId).then(
        event =>
          this.setState({
            eventName: event.name
          })
      );
      this.userService.findUserById(comment.reviewId.customerId).then(
        user =>
          this.setState({
            customerName: user.username
          })
      )
    }
  }

  findEventById(id) {
    this.eventService.findEventById(id)
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className="comment-item">
        <h3>
          <i className="fa fa-magic"/>
          &nbsp;
          {this.state.eventName}
        </h3>
        <Star star={comment.reviewScore}/>
        <p>{comment.text}</p>
      </div>
    )
  }
}

export default CommentItem
