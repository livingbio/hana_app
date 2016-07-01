
import React from 'react'
import {connect} from 'react-redux'
import {DrawerContainer} from "./drawer.jsx"
import {NavBarContainer} from "./nav_bar.jsx"
import {NumberItem} from "./number_item.jsx"
import {LineChartsContainer} from './line_charts.jsx'

import {makeTrendStateKey} from "../keys.js"



export class Trend extends React.Component{

    render(){

        let user = this.props.user;
        let numberItem = this.props.numberItem;

        return(
            <div>

                <DrawerContainer user={user} />

                <div>
                    <NavBarContainer />
                    <div className="container" style={{marginTop: "20px"}}>
                        <NumberItem data={numberItem} />
                        <LineChartsContainer/>
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {

    const authentication = state.authentication;
    let filter = state.filter;
    let trend = state.trend;

    let trendStateKey = makeTrendStateKey({
        sbg: filter.selectedSbg,
        comparison: filter.selectedComparison,
        year: filter.selectedYear,
        user: authentication.user
    });

    let dataList =  trend[trendStateKey];

    let numberItem = null;

    if(dataList.length){
        numberItem = dataList[trend.index];
    }

    return {
        user: authentication.user,
        dataList, numberItem
    }
};


export const TrendContainer = connect(mapStateToProps)(Trend);
