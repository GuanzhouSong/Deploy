import React from 'react'
import EventItem from "../../components/EventItem"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import BackHeader from "../../components/BackHeader";
import EventService from '../../services/EventService.jsx'

class AdminforEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: []
    };

    this.eventService = new EventService();
    this.getEvents = this.getEvents.bind(this);
    this.renderListOfEvents = this.renderListOfEvents.bind(this);
    this.deleteAEvent = this.deleteAEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    console.log("GetEvents!");
    this.eventService.findAllEvents().then(events =>
      this.setState({eventData: events})
    );
  }

  deleteAEvent(uid) {
    this.eventService.deleteEvent(uid);
      this.setState({
        eventData: [
          ...this.state.eventData.filter(
            event => event.id !== uid
          )
        ]
      });
  }


  renderListOfEvents() {
    let events = null;
    if (this.state) {
      events = this.state.eventData.map(
        (event) => {
          return <EventItem key={event.id} event={event}
                           deleteEvent={this.deleteAEvent}/>
        });
    }
    return (
      events
    )
  }

  render() {
    return (
      <div>
        <BackHeader title="Manage Event"/>
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>category</th>
            <th>Start Time</th>
            <th>Address</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody className="wbdv-tbody" id="realBody">
          {this.renderListOfEvents()}
          </tbody>
        </table>

      </div>
    )
  }

}

export default AdminforEvent
