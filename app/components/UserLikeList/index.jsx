import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import BackHeader from "../BackHeader";
import EventService from "../../services/EventService";
import UserService from "../../services/UserService";
import EventCard from "../../components/EventCard";


class Index extends React.Component {

  constructor(props) {
    super(props);

    this.eventService = new EventService();
    this.userService = new UserService();

    this.id = parseInt(this.props.params.id);
    this.getEvents = this.getEvents.bind(this);
    this.renderListOfEvents = this.renderListOfEvents.bind(this);
    this.unlike = this.unlike.bind(this);

    this.state = {
      data: [],
      currentUser:{},
      user:{}
    };
  }

  componentDidMount() {
    this.checkLogin();
    this.getEvents();
  }

  getEvents() {
    this.eventService.findAllEvents().then(events =>
      this.setState({
        data: events
      })
    );
    this.userService.findUserById(this.id).then(user=>
      this.setState({
        user: user
      })
    )
  }

  checkLogin(){
    this.userService.findCurrentUser().then(user =>
      this.setState({
        currentUser:user
      })
    )
  }

  unlike() {

  }


  renderListOfEvents() {
    let events = null;
    if (this.state) {
      events = this.state.data.map(
        (event) => {
          return <EventCard key={event.id}
                            event={event}
                            deleteEvent={this.state.currentUser===undefined?
                              null: this.state.currentUser.id===this.id
                              &&this.state.currentUser.userType==="CUSTOMER_USER"?
                                this.unlike:null}/>
        });
    }
    return (
      events
    )
  }

  render() {
    return (
      <div>
        <BackHeader title="Favourites"/>
        {this.renderListOfEvents()}
      </div>
    )
  }
}

export default Index
