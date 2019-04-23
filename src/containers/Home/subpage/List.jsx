import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'

class List extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        };

        this.loadFirstPageData = this.loadFirstPageData.bind(this);
        this.resultHandle = this.resultHandle.bind(this);
    }   

    componentDidMount(){
        this.loadFirstPageData()
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result)
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        this.resultHandle(result)

        this.setState({
            isLoadingMore: false
        })
    }

    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const page = this.state.page
            this.setState({
                page: page + 1
            })

            const hasMore = json.hasMore
            const data = json.data
            
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default List;
