import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import 'font-awesome/css/font-awesome.css'
import './style.css'
import {postComment} from '../../fetch/user/orderlist'

class CommentWrite extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
        this);
    this.state = {
      star: 0,
      review: ''
    }
    this.reviewOnChange = this.reviewOnChange.bind(this)
    this.starOnChange = this.starOnChange.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }

  reviewOnChange(event) {
    this.setState({review: event.target.value});
    console.log(this.state.review)
  }

  starOnChange(event) {
    this.setState({star: parseInt(event.target.value)});
  }

  submitComment() {
    postComment(this.props.id, this.state.review, this.state.star).then(
        res => {
          res.json().then(r => {
                if (r == false) {
                  alert("Attend the event before comment!")
                }
              }
          )

        }
    ).then(
        window.location.reload(true)
    )

  }

  render() {
    return (
        <div className="write-comment">
          <h3>Write a Comment</h3>
          <div>rate: &nbsp;
            <input type="radio" id="1" name="star" value="1"
                   onChange={this.starOnChange}/>
            <label htmlFor="1">&nbsp;1&nbsp;&nbsp;</label>
            <input type="radio" id="2" name="star" value="2"
                   onChange={this.starOnChange}/>
            <label htmlFor="2">&nbsp;2&nbsp;&nbsp;</label>
            <input type="radio" id="3" name="star" value="3"
                   onChange={this.starOnChange}/>
            <label htmlFor="3">&nbsp;3&nbsp;&nbsp;</label>
            <input type="radio" id="4" name="star" value="4"
                   onChange={this.starOnChange}/>
            <label htmlFor="4">&nbsp;4&nbsp;&nbsp;</label>
            <input type="radio" id="5" name="star" value="5"
                   onChange={this.starOnChange}/>
            <label htmlFor="5">&nbsp;5&nbsp;&nbsp;</label>
          </div>

          <input style={{'width': '100%'}}
                 placeholder="Write a new comment"
                 onChange={this.reviewOnChange}
                 value={this.state.review}></input>
          <button className="col-2 btn-danger"
                  style={{'color': '#FFF'}} onClick={this.submitComment}>Submit
          </button>
        </div>

    )
  }
}

export default CommentWrite
