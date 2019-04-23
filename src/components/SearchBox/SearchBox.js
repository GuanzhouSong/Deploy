import React from 'react'
import './SearchBox.css'
import SearchInput from '../SearchInput'
import {hashHistory} from "react-router";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    }
  }

  enterHandle(value) {
    hashHistory.push('/search/' + value)
  }

  render() {
    return (
      <div className="container-fluid searchbox image">
        <div className="row inputBox">
          <div className="col-1"/>
          <SearchInput
            value=""
            enterHandle={this.enterHandle.bind(this)}/>
          <div className="reminder">Hit ENTRY to Go!</div>

        </div>
      </div>
    )
  }
}
