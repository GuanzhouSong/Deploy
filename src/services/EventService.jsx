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
    });
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

  findSellerByEvent(eventId){
    let promise = fetch(this.url + "/event/"+eventId+"/seller",
      {
        credentials: 'include'
      });

    return promise.then(function (value) {
      return value.text().then(function (value2) {
        if (value2 === "") {
          return undefined;
        } else {
          return JSON.parse(value2);
        }
      });
    });
  }


  findCommentByEvent(eventId){
    return fetch(this.url + "/comment/" + eventId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}

export default EventService
