import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>Popular City</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Boston')}>Boston</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'New York')}>New York</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Los Angeles')}>Los Angeles</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList
