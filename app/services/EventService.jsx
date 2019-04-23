class EventService {
  constructor() {
    this.url = "https://sheltered-shelf-80546.herokuapp.com/api"
  }

  findAllEvents(){
    return fetch(this.url + "/event",{
      credentials:'include'
    })
      .then(response => response.json());
  }

  createEvent(event) {
    return fetch(this.url + "/event/create", {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json());
  }

  deleteEvent(eventId) {
    fetch(this.url + "/event/" + eventId, {
      method: 'DELETE',
      credentials: 'include'
    })
    // .then(response => response.json());
  }
  // findEventsBySeller = (id) =>
  //   fetch(this.url + "/event/seller/" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());
  //
  // findEventsIn = (id) =>
  //   fetch(this.url + "/event/in/" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());
  //
  // findEventsLike = (id) =>
  //   fetch(this.url + "/event/like" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());
  //
  // inEvents = (eid, uid)=>
  //   fetch(this.url + "/event/like" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());
  //
  // likeEvents = (eid, uid)=>
  //   fetch(this.url + "/event/like" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());
  //
  // unlikeEvents = (eid, uid)=>
  //   fetch(this.url + "/event/like" + id,{
  //     credentials:'include'
  //   })
  //     .then(response => response.json());

}

export default EventService
