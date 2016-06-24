import * as dao from "../query";
import * as navigation from "./navigation.js";
import {makeTrendStateKey} from "../keys";


export const selectCategory = (category) => {
   return {
       type: "TREND_CHOOSE_CATEGORY",
       category
   }
};


export const selectSeriesIndex = (index) => {
    return {
        type: "TREND_CHOOSE_SERIES_INDEX",
        index
    }
};


export const updateTrendData = ({sbg, comparison, year})=>{

    return (dispatch, getState) => {

        let authentication = getState().authentication;
        let user = authentication.user;

        let cacheDataKey = makeTrendStateKey({
            sbg, comparison, year, user
        });

        let trendState = getState().trend;

        if(trendState[cacheDataKey]){
            dispatch(navigation.navigateToTrend());
            return;
        }

        let promise;

        if(comparison === 'month'){
            promise = dao.getCompanyDataInYear({
                sbg, year,
                user,
                password: authentication.password
            });
        }
        else{
            promise = dao.getCompanyDataAllYear({
                sbg,
                user,
                password: authentication.password
            });
        }

        promise.then((data)=> {
            dispatch({
                type: "TREND_SETUP_DATA",
                key: cacheDataKey,
                data: data
            });

            dispatch(navigation.navigateToTrend());
        })
    }
};


