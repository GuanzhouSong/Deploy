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
        return (
            <div>
                <SearchHeader keyword={params.city}/>
                <SearchList keyword={params.city} cityName={params.city}/>
            </div>
        )   
    }
}

export default Search
