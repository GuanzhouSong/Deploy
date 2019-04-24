import React from 'react'
import EventCard from '../EventCard'
import UserCard from '../UserCard'
import CommentCard from '../CommentCard'
import './style.css'
import EventService from "../../services/EventService";
import UserService from "../../services/UserService";

class UserDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);

    this.findFollowing = this.findFollowing.bind(this);
    this.findFollower = this.findFollower.bind(this);
    this.findAttendedEvent = this.findAttendedEvent.bind(this);
    this.findCommentByCustomer = this.findCommentByCustomer.bind(this);
    this.findEventBySeller = this.findEventBySeller.bind(this);
    this.eventService = new EventService();
    this.userService = new UserService();


    this.state = {
      eventData: [],
      favouriteData: [],
      commentData: [],
      followData: []
    }
  }

  componentDidMount(){
    if (this.props.user.id !== undefined && this.props.user.userType !== "ADMIN_USER") {
      this.loadData(this.props.user)
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.id !== undefined && newProps.user.userType !== "ADMIN_USER") {
      this.loadData(newProps.user)
    }
  }

  loadData(user) {

    // user.userType === "CUSTOMER_USER" ? this.findAttendedEvent(user.id) :
    //   user.userType === "SELLER_USER" ? this.findEventBySeller(user.id) : null;
    //
    // user.userType === "CUSTOMER_USER" ? this.findLikedEvent(user.id) : null;
    //
    // user.userType === "CUSTOMER_USER" ? this.findCommentByCustomer(user.id) : null;
    //
    // user.userType === "CUSTOMER_USER" ? this.findFollowing(user.id) :
    //   user.userType === "SELLER_USER" ? this.findFollower(user.id) : null;

    if(user.userType === "CUSTOMER_USER"){
      this.findAttendedEvent(user.id);
      this.findLikedEvent(user.id);
      this.findCommentByCustomer(user.id);
      this.findFollowing(user.id);
      return;
    }

    if(user.userType === "SELLER_USER"){
      this.findEventBySeller(user.id);
      this.findFollower(user.id);
    }

  }

  findAttendedEvent(id) {
    this.userService.findAttendedEvent(id).then(events =>
      this.setState({
        eventData: events
      })
    );
  }

  findEventBySeller(id) {
    this.userService.findEventForSeller(id).then(events =>
      this.setState({
          eventData: events
        }
      )
    )
  }

  findLikedEvent(id) {
    this.userService.findLikedEvent(id).then(events =>
      this.setState({
        favouriteData: events
      })
    );
  }

  findCommentByCustomer(id) {
    this.userService.findCommentByCustomer(id).then(comments =>
      this.setState({
        commentData: comments
      })
    );
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

  unAttendEvent(eid) {
    this.userService.unAttendEvent(this.props.currentUser.id, eid);
    this.setState({
      eventData: this.state.eventData.filter(event => event.id !== eid)
    });
  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id);
    this.setState({
      eventData: this.state.eventData.filter(user => user.id !== id)
    });
  }

  unfollowSeller(id) {
    this.setState({
      followData: this.state.followData.filter(user => user.id !== id)
    });
    this.userService.unfollow(id);
  }

  unLikeEvent(eid) {
    this.userService.unLikeEvent(this.props.currentUser.id, eid);
    this.setState({
      favouriteData: this.state.favouriteData.filter(event => event.id !== eid)
    });
  }


  render() {
    return (
      <div id="user-detail"
           hidden={this.props.user.userType === "ADMIN_USER"}>
        <div id="user-event" className="detail-container">
          <div className="row">
            <h3 className="title">Joined Events </h3>
          </div>
          {this.state.eventData.length ?
            <div>
              {this.state.eventData.map(event => {
                return <EventCard
                  key={event.id}
                  event={event}
                  deleteEvent={this.props.currentUser === undefined ?
                    this.alert : this.props.currentUser.id !== this.props.user.id ?
                      null : this.props.currentUser.userType === "CUSTOMER_USER" ?
                        this.unAttendEvent.bind(this) : this.deleteEvent.bind(this)}/>
              })}
            </div>
            : <p className="no">Join some RIGHT NOW!</p>}
        </div>

        <div id="user-favourite" className="detail-container 1"
             hidden={this.props.user.userType !== "CUSTOMER_USER"}>
          <div className="row">
            <h3 className="title">Favourites</h3>
          </div>
          {this.state.favouriteData.length ?
            <div>
              {this.state.favouriteData.map(event => {
                return <EventCard
                  key={event.id}
                  event={event}
                  deleteEvent={this.props.currentUser === undefined ?
                    null : this.props.currentUser.id !== this.props.user.id ?
                      null : this.props.currentUser.userType === "CUSTOMER_USER" ?
                        this.unLikeEvent.bind(this) : null}/>
              })}
            </div>
            : <p className="no">no favourite</p>}
        </div>

        <div id="user-comment" className="detail-container"
             hidden={this.props.user.userType !== "CUSTOMER_USER"}>
          <div className="row">
            <h3 className="title">Comments</h3>
          </div>
          {this.state.commentData.length
            ? <div>
              {this.state.commentData.map(comment => {
                return <CommentCard
                  // key={}
                  comment={comment}
                  user={this.props.user}/>
              })}
            </div>
            : <p className="no">no comment</p>
          }
        </div>

        <div id="user-follow" className="detail-container">
          <div className="row ">
            {this.props.user.userType === "CUSTOMER_USER" ?
              <h3 className="title">Following</h3> : <h3 className="title">Followers</h3>}
          </div>
          {this.state.followData.length
            ? <div>
              {this.state.followData.map(user => {
                return <UserCard
                  key={user.id}
                  user={user}
                  deleteUser={this.props.currentUser === undefined ?
                    null : this.props.currentUser.id === this.props.user.id
                    && this.props.currentUser.userType === "CUSTOMER_USER" ?
                      this.unfollowSeller.bind(this) : null}/>
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
