import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: this.props.data.commentState
        }
    }
    showComment() {
        this.setState({
            commentState: 1
        });
    }
    hideComment() {
        this.setState({
            commentState: 0
        });
    }
    submitComment() {
        // 获取操作函数
        const submitComment = this.props.submitComment
        console.log(submitComment)
        // 获取id
        const id = this.props.data.id
        // 获取评价内容
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }

        // 执行数据提交
        submitComment(id, value, 0,this.commentOk.bind(this))
    }
    commentOk() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }

    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">

            </div>
        )
    }
}

export default Item
