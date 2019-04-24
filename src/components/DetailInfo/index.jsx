import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../components/Star'

import './style.css'
import {Link} from "react-router";
import EventService from "../../services/EventService";

class DetailInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.eventService = new EventService();
    this.state = {
      seller: undefined
    }
  }

  componentDidMount() {
    this.eventService.findSellerByEvent(this.props.data.id).then(
      seller => this.setState({
        seller: seller
      })
    )
  }


  render() {
    const data = this.props.data
    // console.log(data)
    let time_start = data.time_start ? data.time_start : ""
    time_start = time_start.replace("T", " ").substr(0, time_start.length - 6)

    return (
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={data.image_url} alt="event image"/>
          </div>
          <div className="info-content">
            <h1>{data.name}</h1>
            <div className="star-container">~
              <span className="price">$ {data.cost}</span>
            </div>
            <p className="sub-title">Start at {time_start}</p>
            <p className="sub-title">{data.category}</p>
            <p className="sub-title">{data.address} {data.city} {data.state}</p>
            {this.state.seller !== undefined ?
              <Link
                to={'/profile/' + this.state.seller.id}>{this.state.seller.username}</Link> :
                <p className="sub-title">This event is from yelp.</p>
            }
          </div>
        </div>
        <p dangerouslySetInnerHTML={{__html: data.description}} className="info-desc"></p>
      </div>
    )
  }
}

export default DetailInfo
