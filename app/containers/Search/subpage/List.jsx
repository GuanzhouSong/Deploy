import React from 'react'
import { connect } from 'react-redux'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import { getSearchData } from '../../../fetch/search/search'

class SearchList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city:"",
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
        this.loadFirstPage = this.loadFirstPage.bind(this)
        this.loadMoreData = this.loadMoreData.bind(this)
        this.resultHandle = this.resultHandle.bind(this)
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div></div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }

    componentDidMount() {
        this.loadFirstPage();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.cityName == prevProps.cityName){
            return
        }
        this.setState({
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        })

        this.loadFirstPage()
    }

    loadFirstPage() {
        const cityName = this.props.cityName
        const result = getSearchData(1, cityName)
        this.resultHandle(result)
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getSearchData(page, cityName)
        this.resultHandle(result)

        this.setState({
            isLoadingMore: false
        })
    }

    resultHandle(result) {
        const page = this.state.page
        this.setState({
            page: page + 1
        })
        result.then(res => res.json()
        ).then(data => {
            console.log(data)
            this.setState({
                hasMore: true,
                data: this.state.data.concat(data)
            })
        })
    }
}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo
})

export default connect(mapStateToProps, null)(SearchList)
