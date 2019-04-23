import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BackHeader from "../BackHeader";
import {getCommentData} from '../../fetch/detail/detail'
import EventService from "../../services/EventService";
import UserService from "../../services/UserService";
import CommentCard from "../../components/CommentCard";


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.userService = new UserService();

    this.id = parseInt(this.props.params.id);
    this.getComments = this.getComments.bind(this);

    this.state = {
      data: [],
      currentUser: {},
      user: {}
    };
  }

  componentDidMount() {
    this.checkLogin();
    this.getComments();
  }

  getComments() {
    // this.eventService.findAllComments().then(comments =>
    //   this.setState({
    //     data: comments
    //   })
    // );
    getCommentData(0, 0).then(res => {
      return res.json()
    }).then(json => {
      this.setState({
        data: json.data
      })
    }).catch(ex => {
      if (__DEV__) {
        console.error('error, ', ex.message)
      }
    });

    this.userService.findUserById(this.id).then(user =>
      this.setState({
        user: user
      })
    )
  }

  checkLogin() {
    this.userService.findCurrentUser().then(user =>
      this.setState({
        currentUser: user
      })
    )
  }


  renderListOfComments() {
    let comments = null;
    if (this.state) {
      comments = this.state.data.map(
        (comment) => {
          return <CommentCard key={comment.id}
                              comment={comment}
                              user={this.state.user}/>
        });
    }
    return (
      comments
    )
  }

  render() {
    return (
      <div>
        <BackHeader title="Comments"/>
        {this.renderListOfComments()}
      </div>
    )
  }
}

export default Index
