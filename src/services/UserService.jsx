class UserService {
  constructor() {
    this.url = "https://sheltered-shelf-80546.herokuapp.com/api"
  }

  findAllUsers() {
    return fetch(this.url + "/user", {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findCurrentUser() {
    let promise = fetch(this.url + "/currentUser",
      {
        credentials: 'include'
      });

    return promise.then(function (value) {
      return value.text().then(function (value2) {
        if (value2 === "") {
          return undefined;
          // return constants.ANONYMOUS_USER;
        } else {
          return JSON.parse(value2);
        }
      });
    });
  }

  register(username, password, role) {
    return fetch(this.url + "/" + role + "/signUp", {
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json());
  }

  profile() {
    return fetch(this.url + "/profile", {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  login(username, password, role) {
    let promise = fetch(this.url + "/" + role + "/login", {
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'content-type': 'application/json'
      },
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

  logout() {
    return fetch(this.url + "/logout", {
      method: 'POST',
      credentials: 'include'
    });
  }

  deleteUser(userId) {
    fetch(this.url + "/user/delete/" + userId, {
      method: 'DELETE',
      credentials: 'include'
    })
  }

  updateUser(user) {
    // let role = user.userType==="CUSTOMER_USER"?"/customer":user.userType==="SELLER_USER"?"/seller":"/admin";
    return fetch(this.url +"/user/profile/update", {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json());
  }

  findUserById(userId) {
    let promise = fetch(this.url + "/user/" + userId,
      {
        credentials: 'include'
      });

    return promise.then(function (value) {
      return value.text().then(function (value2) {
        if (value2 === "") {
          return undefined;
          // return constants.ANONYMOUS_USER;
        } else {
          return JSON.parse(value2);
        }
      });
    });
  }

  isFollow(sellerId){
    return fetch(this.url+"/seller/isFollow/"+sellerId,{
      credentials: 'include'
    })
  }

  follow(sellerId){
    return fetch(this.url+"/customer/follow/seller/"+sellerId,{
      method: 'POST',
      credentials: 'include'
    });
  }

  unfollow(sellerId){
    fetch(this.url+"/customer/seller/"+sellerId,{
      method: 'DELETE',
      credentials: 'include'
    })
  }

  findFollowing(customerId) {
    return fetch(this.url + "/following/customer/" + customerId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findFollower(sellerId) {
    return fetch(this.url + "/followed/seller/" + sellerId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAttendedEvent(customerId){
    return fetch(this.url + "/event/in/" + customerId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findEventForSeller(sellerId){
    return fetch(this.url + "/seller/" + sellerId+"/event", {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  unAttendEvent(customerId,eventId){
    fetch(this.url + "/"+ customerId+"/in/event/"+eventId , {
      method: 'DELETE',
      credentials: 'include'
    })
  }

  findLikedEvent(customerId){
    return fetch(this.url + "/event/like/" + customerId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  unLikeEvent(customerId,eventId){
    fetch(this.url + "/"+ customerId+"/like/event/"+eventId , {
      method: 'DELETE',
      credentials: 'include'
    })
  }

  findCommentByCustomer(customerId){
    return fetch(this.url + "/comment/customer/" + customerId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}

export default UserService
