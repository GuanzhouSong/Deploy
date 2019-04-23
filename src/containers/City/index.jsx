import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {hashHistory} from 'react-router'
import {CITYNAME} from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import BackHeader from '../../components/BackHeader'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
    render() {
        return (
            <div>
                <BackHeader title="Chose a location" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this.changeCity.bind(this)} />
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)
        localStore.setItem(CITYNAME, newCity)
        hashHistory.push('/')
    }
}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo
})

const mapDispatchToProps = (dispatch) => ({
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(City)
