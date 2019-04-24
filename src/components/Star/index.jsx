import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let star = this.props.star || 0
        if (star > 5) {
            star = star % 5
        }

        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return star >= item ? <i key={index} style={{ "color": "rgb(233, 32, 61)"}} className={'stars icon-star'}></i>:
                        <i key={index} className={'icon-star'}style={{ "color": "rgb(255,209,202)"}}></i>
                })}
            </div>
        )
    }
}

export default Star
