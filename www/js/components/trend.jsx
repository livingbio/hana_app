
import React from 'react'
import {connect} from 'react-redux'

import {Drawer} from "./drawer.jsx"
import {Filter} from "./filter.jsx"
import {NavBarContainer} from "./nav_bar.jsx"
import {NumberItem} from "./number_item.jsx"
import {LineCharts} from "./line_charts.jsx"

import {makeTrendStateKey} from "../keys";



export class Trend extends React.Component{

    render(){

        let user = this.props.user;
        let numberItem = this.props.numberItem;

        return(
            <div>
                <Drawer profileID={user} />
                <NavBarContainer />
                <div className="container">
                    <NumberItem data={numberItem} />
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

    let trendStateKey = makeTrendStateKey({
        sbg: filter.selectedSbg,
        comparison:filter.selectedComparison,
        year: filter.selectedYear,
        user:authentication.user
    });

    let dataList =  trend[trendStateKey];
    return {
        user: authentication.user,
        dataList,
        numberItem: dataList[0]
    }
};


export const TrendContainer = connect(mapStateToProps)(Trend);
