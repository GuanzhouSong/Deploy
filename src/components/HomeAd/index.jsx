import React from 'react'
import './style.less';

class HomeAd extends React.Component {
    render() {
        return (
            <div id="home-ad">
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">

                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd
