import React from 'react'
import './style.css'

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="search-input" >
        <input

          type="text"
          placeholder="Please enter city name"
          onChange={this.ChangeHandle.bind(this)}
          onKeyUp={this.KeyUpHandle.bind(this)}
          value={this.state.value}/>
        <button className="btn-search btn btn-outline-danger float-right"
                onClick={this.click.bind(this)}>Search
        </button>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }

  ChangeHandle(e) {
    this.setState({
      value: e.target.value
    });
  }

  KeyUpHandle(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(e.target.value)
  }

  click() {
    this.props.enterHandle(this.state.value)
  }
}

export default SearchInput
