import React from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader'
import SearchBox from '../../components/SearchBox/SearchBox'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <HomeHeader cityName={this.props.userinfo.cityName}/>
          <SearchBox/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo
});

export default connect(mapStateToProps, null)(Home);
