class CommentService {
  constructor() {
    this.url = "xxx/api"
  }

  submitComment = (eid,uid) =>
    fetch(this.url + "/comment/"+eid+"/customer/" + uid,{
      credentials:'include'
    })
      .then(response => response.json());

  findCommentsByEvent = (id) =>
    fetch(this.url + "/comment/event/" + id,{
      credentials:'include'
    })
      .then(response => response.json());

  findCommentsBySeller = (id) =>
    fetch(this.url + "/comment/seller/" + id,{
      credentials:'include'
    })
      .then(response => response.json());

  findCommentsByCustomer = (id) =>
    fetch(this.url + "/comment/customer/" + id,{
      credentials:'include'
    })
      .then(response => response.json());

}

export default CommentService
