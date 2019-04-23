import React from 'react'
import './style.less'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
            <input
                className="search-input"
                type="text"
                placeholder="Please enter city name"
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}/>
                <button onClick={this.click.bind(this)}>Search</button>
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
