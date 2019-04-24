import React from 'react'
import {Link} from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class EventItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.event;
        return (
            <tr>
              <td>
                <Link to={`/detail/`+ data.id}>{data.name}</Link>
              </td>
              <td>{data.category}</td>
              <td>{data.time_start}</td>
              <td>{data.address}</td>
              <td>
                <span className="float-right">
                  <i className="fa fa-trash-o" onClick={()=>this.props.deleteEvent(data.id)}/>
                </span>
              </td>
            </tr>
        )
    }
}

export default EventItem
