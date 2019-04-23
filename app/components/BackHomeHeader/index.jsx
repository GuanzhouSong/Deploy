import React from 'react'
import './style.less'
import { hashHistory } from 'react-router'

class BackHomeHeader extends React.Component {
    render() {
        return (
            <div id="back-home-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="fa fa-home fa-lg"/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    clickHandle() {
        hashHistory.push('/')
    }
}

export default BackHomeHeader
