import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentList from '../../../components/CommentList'
import {getCommentData} from '../../../fetch/detail/detail'

class Comment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        {
          this.state.data.length
            ? <CommentList data={this.state.data}/>
            : <div>Be the first one to COMMENT!</div>
        }
      </div>
    )
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  loadFirstPageData() {
    const result = getCommentData(this.props.id)
    this.resultHandle(result)
  }


  testResult(result) {
    result.then(res => {
      res.text().then(function (value) {
        if (value === "") {
          return false;
        }
      })
    })
  }


  resultHandle(result) {
    if (!this.testResult) {
      return
    }
    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      this.setState({
        data: this.state.data.concat(json)
      })
    })
  }
}

export default Comment
