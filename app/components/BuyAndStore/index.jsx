import React from 'react'
import './style.less'

class BuyAndStore extends React.Component {
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isJoined
                            ? <button className="selected" onClick={this.joinClickHandle.bind(this)}>Already IN!</button>
                            : <button onClick={this.joinClickHandle.bind(this)}>Join Now!</button>
                    }
                </div>
                <div className="item-container float-right">
                {
                    this.props.isStore
                    ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>Liked</button>
                    : <button onClick={this.storeClickHandle.bind(this)}>Like</button>
                }
                </div>
            </div>
        )
    }
    storeClickHandle() {
        const storeHandle = this.props.storeHandle
        storeHandle()
    }

    joinClickHandle() {
        const joinHandle = this.props.joinHandle
        joinHandle()
    }


}

export default BuyAndStore
