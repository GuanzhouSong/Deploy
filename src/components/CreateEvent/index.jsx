import React from 'react'
import './style.css'
import {hashHistory} from 'react-router'
import EventService from '../../services/EventService.jsx'

import BackHeader from "../BackHeader";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.eventService = new EventService();
    this.id = parseInt(this.props.params.id);

    this.state = {
      id:"",
      name: "",
      category: "",
      time_start: "",
      time_end: "",
      image_url: "",
      cost: "",
      description: "",
      address: "",
      state: "",
      city: "",
      zip: ""
    }
  }

  handleChange_name(event) {
    this.setState({name: event.target.value});
    // console.log(this.state.name)
  }

  handleChange_category(event) {
    this.setState({category: event.target.value});
    // console.log(this.state.category)
  }

  handleChange_time_start(event) {
    this.setState({time_start: event.target.value});
    // console.log(this.state.time_start)
  }

  handleChange_time_end(event) {
    this.setState({time_end: event.target.value});
    // console.log(this.state.time_end)
  }

  handleChange_image_url(event) {
    this.setState({image_url: event.target.value});
    // console.log(this.state.image_url)
  }

  handleChange_cost(event) {
    this.setState({cost: event.target.value});
    // console.log(this.state.cost)
  }

  handleChange_description(event) {
    this.setState({description: event.target.value});
    // console.log(this.state.description)
  }

  handleChange_address(event) {
    this.setState({address: event.target.value});
    // console.log(this.state.address)
  }

  handleChange_state(event) {
    this.setState({state: event.target.value});
    // console.log(this.state.state)
  }

  handleChange_city(event) {
    this.setState({city: event.target.value});
    // console.log(this.state.city)
  }

  handleChange_zip(event) {
    this.setState({zip: event.target.value});
    // console.log(this.state.zip)
  }

  handleSubmit() {
    if (Index.isBlank(this.state.name)) {
      alert("Please input event name.");
      return;
    }
    this.setState({id:(new Date()).getTime().toString()}
    ,()=>
        this.eventService.createEvent(this.state).then(
        alert("Create successfully!")
      ).then(
         hashHistory.push('/user/'+this.id)
      ).catch(
        "Creation failed!"
      )
    );

  }

  static isBlank(val) {
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return (val === "" || re.test(val));
  }

  render() {
    return (
      <div id="create-event">
        <BackHeader title="Create Event"/>
        <form className="form-group "
              onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="name">Name:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput"
                     type="text"
                     id="name"
                     onChange={this.handleChange_name.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="category">category:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="category"
                     onChange={this.handleChange_category.bind(this)}/>
            </div>
          </div>


          <div className="form-group row">
            <label className="col-sm-3 col-md-2"
                   htmlFor="time_start">time_start:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="datetime-local"
                     id="time_start"
                     onChange={this.handleChange_time_start.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="time_end">time_end:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="datetime-local"
                     id="time_end"
                     onChange={this.handleChange_time_end.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2"
                   htmlFor="image_url">image_url:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="image_url"
                     onChange={this.handleChange_image_url.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="cost">cost:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="cost"
                     onChange={this.handleChange_cost.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2"
                   htmlFor="description">description:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="description"
                     onChange={this.handleChange_description.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="address">address:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="address"
                     onChange={this.handleChange_address.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="state">state:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="state"
                     onChange={this.handleChange_state.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="city">city:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="city"
                     onChange={this.handleChange_city.bind(this)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-md-2" htmlFor="zip">zip:</label>
            <div className="col-sm-9 col-md-10">
              <input className="eventInput" type="text" id="zip"
                     onChange={this.handleChange_zip.bind(this)}/>
            </div>
          </div>

          <input className="submit"
                 type="submit"
                 value="Submit"/>
        </form>
      </div>
    )
  }

}

export default Index
