import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        if(this.props.deleteEvent!==null) {
            this.deleteEvent = this.props.deleteEvent.bind(this);
        }
    }
    render() {
        const event = this.props.event;
        return (
            <div id="event-card" className="row">
                <Link className = "event" to={'/detail/' + event.id}>
                    <div className="item-img-container float-left">
                        <img src={event.image_url} alt={event.name}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{event.name}</h3>
                        </div>
                        <p className="item-sub-title">
                            {event.category}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span
                                className="price float-left">Start At {event.time_start}</span>
                            <span
                                className="mumber float-right">Like {event.mumber}</span>
                        </div>
                    </div>
                </Link>
                <div>
                    <button className="delete-btn"
                            hidden={this.props.deleteEvent===null}
                            onClick={() => this.deleteEvent(event.id)}>
                        <i className="fa fa-close"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default ListItem
