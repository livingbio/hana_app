
import React from 'react'
import {connect} from 'react-redux'

import {Drawer} from "./drawer.jsx"
import {Filter} from "./filter.jsx"
import {NavBar} from "./nav_bar.jsx"
import {NumberItem} from "./number_item.jsx"
import {LineCharts} from "./line_charts.jsx"



export class Trend extends React.Component{

    render(){

        let user = this.props.user;
        let dataList = this.props.dataList;

        return(
            <div>
                <Drawer profileID={user} />
                <NavBar />
                <div className="container">
                    <NumberItem dataList={dataList} />
                </div>
            </div>
        );
        /*
         <div id="main">
         <NavBar />
         <div className="container">
         <NumberItem dataList={this.props.dataList} />
         <LineCharts dataList={this.props.dataList} />
         </div>
         </div>
         */

    }

}


const mapStateToProps = (state, ownProps) => {

    const authentication = state.authentication;
    let filter = state.filter;
    let trend = state.trend;

    let dataKey = filter.selectedComparison + filter.sbg + authentication.user;

    return {
        user: authentication.user,
        dataList: trend[dataKey]
    }
};


export const TrendContainer = connect(mapStateToProps)(Trend);
