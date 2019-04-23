import React from 'react'
import BackHeader from '../../components/BackHeader'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'
import CommentWrite from '../../components/CommentWrite'

class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const id = this.props.params.id
    return (
        <div>
          <BackHeader title="Event Detail"/>
          <Info id={id}/>
          <Buy id={id}/>
          <CommentWrite id={id}></CommentWrite>
          <Comment id={id}/>
        </div>
    )
  }
}

export default Detail
