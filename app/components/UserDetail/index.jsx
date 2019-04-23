import React from 'react'
import {Link} from 'react-router'
import EventList from '../List'
import EventCard from '../EventCard'
import UserCard from '../UserCard'
import CommentCard from '../CommentCard'
import {getCommentData} from '../../fetch/detail/detail'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import EventService from "../../services/EventService";
import UserService from "../../services/UserService";

class UserDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);

    this.findFollowing = this.findFollowing.bind(this);
    this.findFollower = this.findFollower.bind(this);
    this.quitEvent = this.quitEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.unfollow = this.unfollow.bind(this);
    this.unLike = this.unLike.bind(this);

    this.eventService = new EventService();
    this.userService = new UserService();


    this.state = {
      eventData: [],
      favouriteData: [],
      commentData: [],
      followData: []
    }
  }

  // componentDidMount() {
  //   this.loadData()
  // }

  componentWillReceiveProps(newProps) {
    if (newProps.user.id !== undefined&&newProps.user.userType!=="ADMIN_USER") {
      this.loadData(newProps.user)
    }
  }

  loadData(user) {
    getCommentData(0, 0).then(res => {
      return res.json()
    }).then(json => {
      this.setState({
        commentData: this.state.commentData.concat(json.data)
      })
    }).catch(ex => {
      if (__DEV__) {
        console.error('error, ', ex.message)
      }
    });//need to change


    user.userType === "CUSTOMER_USER" ? this.findFollowing(user.id) :this.findFollower(user.id);

    this.eventService.findAllEvents().then(events =>//need to change
      this.setState({
        eventData: events
      })
    );

    this.eventService.findAllEvents().then(events =>//need to change
      this.setState({
        favouriteData: events
      })
    )
  }


  findFollowing(id) {
    this.userService.findFollowing(id).then(follows =>
      this.setState({
          followData: follows
        }
      )
    );
  }

  findFollower(id) {
    this.userService.findFollower(id).then(follows =>
      this.setState({
        followData: follows
      })
    );
  }


  quitEvent() {
     //need to
  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id);
    this.setState({
      eventData: this.state.eventData.filter(user => user.id !== id)
    });
  }

  unfollow(id) {
    this.setState({
      followData: this.state.followData.filter(user => user.id !== id)
    });
    this.userService.unfollow(id);
  }

  unLike() {
     //need to
  }

  render() {
    return (
      <div id="user-detail"
           hidden={this.props.user.userType === "ADMIN_USER"}>
        <div className="detail-container">
          <div className="row">
            <h3 className="title">Events </h3>
            <Link className="more" to={"/event/" + this.props.user.id}>
              more
            </Link>
          </div>
          {this.state.eventData.length ?
            <div>
              {this.state.eventData.slice(0, 3).map(event => {
                return <EventCard
                  key={event.id}
                  event={event}
                  deleteEvent={this.props.currentUser === undefined ?
                    null : this.props.currentUser.id !== this.props.user.id ?
                      null : this.props.currentUser.userType === "CUSTOMER_USER" ?
                        this.quitEvent : this.deleteEvent}/>
              })}
            </div>
            : <p className="no">no favourite</p>}
        </div>

        <div className="detail-container"
             hidden={this.props.user.userType !== "CUSTOMER_USER"}>
          <div className="row">
            <h3 className="title">Favourites</h3>
            <Link className="more" to={"/favourite/" + this.props.user.id}>
              more
            </Link>
          </div>
          {this.state.favouriteData.length ?
            <div>
              {this.state.favouriteData.slice(0, 3).map(event => {
                return <EventCard
                  key={event.id}
                  event={event}
                  deleteEvent={this.props.currentUser === undefined ?
                    null : this.props.currentUser.id !== this.props.user.id ?
                      null : this.props.currentUser.userType === "CUSTOMER_USER" ?
                        this.unLike : null}/>
              })}
            </div>
            : <p className="no">no favourite</p>}
        </div>

        <div className="detail-container">
          <div className="row">
            <h3 className="title">Comments</h3>
            <Link className="more" to={"/comment/" + this.props.user.id}>
              more
            </Link>
          </div>
          {this.state.commentData.length
            ? <div>
              {this.state.commentData.slice(0, 3).map(comment => {
                return <CommentCard
                  key={comment.id}
                  comment={comment}
                  user={this.props.user}/>
              })}
            </div>
            : <p className="no">no comment</p>
          }
        </div>

        <div className="detail-container">
          <div className="row ">
            {this.props.user.userType === "CUSTOMER_USER" ?
              <h3 className="title">Following</h3> : <h3 className="title">Followers</h3>}
            <Link className="more" to={"/follow/" + this.props.user.id}>
              more
            </Link>
          </div>
          {this.state.followData.length
            ? <div>
              {this.state.followData.slice(0, 3).map(user => {
                return <UserCard
                  key={user.id}
                  user={user}
                  deleteUser={this.props.currentUser === undefined ?
                    null : this.props.currentUser.id === this.props.user.id
                    && this.props.currentUser.userType === "CUSTOMER_USER" ?
                      this.unfollow : null}/>
              })}
            </div>
            : <p className="no">no follow</p>
          }
        </div>
      </div>
    )
  }


}

export default UserDetail
