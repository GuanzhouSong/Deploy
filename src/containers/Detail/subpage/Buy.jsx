import React from 'react'
import {
  inEvent,
  isIn,
  isLiked,
  isLogin,
  likeEvent,
  uninEvent,
  unlikeEvent
} from "../../../fetch/user/orderlist";

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStore: false,
      isJoined:false
    }
  }

  render() {
    return (
        <BuyAndStore isStore={this.state.isStore}
                     isJoined={this.state.isJoined}
                     storeHandle={this.storeHandle.bind(this)}
                     joinHandle={this.joinHandle.bind(this)}

        />
    )
  }

  componentDidMount() {
    this.checkStoreState()
  }

  checkStoreState() {
    const id = this.props.id
    isLiked(id).then(
        res => {
          res.json().then(
              r => {
                if (r == true) {
                  this.setState({isStore: true})
                }
              }
          )
        }
    )
    isIn(id).then(
        res => {
          res.json().then(
              r => {
                if (r == true) {
                  this.setState({isJoined: true})
                }
              }
          )
        }
    )

  }

  loginCheck() {
    return isLogin().then(
        res => res.json().then(
          r =>{
            var log = r;
            console.log(log);
            return log;
          }
        )

    )
  }

  storeHandle() {
    isLogin().then(
      res => res.json().then(
        r =>{
          var log = r;
          console.log(log);
          if(log){
            const id = this.props.id

            if (this.state.isStore) {
              unlikeEvent(id).then(
                res => res.json().then(
                  tf => {
                    if(!tf){
                      alert("emmm ,something goes wrong, please try again.")
                    }else{
                      this.setState({isStore:!this.state.isStore})
                    }
                  }
                )
              )
            } else {
              likeEvent(id).then(
                res => res.json().then(
                  tf => {
                    if(!tf){
                      alert("emmm ,something goes wrong, please try again.")
                    }else{
                      this.setState({isStore:!this.state.isStore})
                    }
                  }
                )
              )
            }
          }else{
            alert("Please login first!")
          }
        }
      )
    )



  }

  joinHandle() {
    isLogin().then(
      res => res.json().then(
        r =>{
          var log = r;
          console.log(log);
          if(log){
            const id = this.props.id

            if (this.state.isJoined) {
              inEvent(id).then(
                res => res.json().then(
                  tf => {
                    if(!tf){
                      alert("emmm ,something goes wrong, please try again.")
                    }else{
                      this.setState({isJoined:!this.state.isJoined})
                    }
                  }
                )
              )
            } else {
              uninEvent(id).then(
                res => res.json().then(
                  tf => {
                    if(!tf){
                      alert("emmm ,something goes wrong, please try again.")
                    }else{
                      this.setState({isJoined:!this.state.isJoined})
                    }
                  }
                )
              )
            }
          }else{
            alert("Please login first!")
          }
        }
      )
    )

  }
}

export default Buy
