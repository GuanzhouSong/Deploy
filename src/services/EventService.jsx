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
  }

  findEventById(eventId){
    return fetch(this.url + "/event/" + eventId, {
      credentials: 'include'
    })
    .then(response => response.json());
  }

  findCommentByEvent(eventId){
    return fetch(this.url + "/comment/" + eventId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}

export default EventService
