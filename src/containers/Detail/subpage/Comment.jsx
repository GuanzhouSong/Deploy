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
    console.log(this.props.id)
    const result = getCommentData(this.props.id)
    this.resultHandle(result)
  }

  resultHandle(result) {
    result.then(value=>
      value.text().then(value2 =>
        value2 === "" ? null :
          this.setState({
            data: this.state.data.concat(JSON.parse(value2))
          })
      )
    )
  }

}

export default Comment
