import * as constants from "../Constants/Users";

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
    return fetch(this.url + "/user/" + userId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  follow(sellerId){
    fetch(this.url+"/customer/follow/seller/"+sellerId,{
      method: 'POST',
      credentials: 'include'
    })
    console.log("follow")
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

}

export default UserService
