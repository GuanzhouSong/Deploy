import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log('search' ,this.props.params);
        const params = this.props.params;
        const city = params.city?params.city:"boston"
        return (
            <div>
                <SearchHeader keyword={city}/>
                <SearchList keyword={city} cityName={city}/>
            </div>
        )   
    }
}

export default Search
