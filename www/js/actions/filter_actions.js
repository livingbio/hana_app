import * as dao from "../query";
import * as navigation from "./navigation.js";
import * as trendAction from "./trend_action";

export const updateSelectedFilter = ({selectedYear, selectedComparison, selectedSbg}) => {
    return (dispatch) => {

        dispatch({
            type: "FILTER_UPDATE_SELECTED",
            selectedYear, selectedComparison, selectedSbg
        });

        dispatch(trendAction.updateTrendData({
            sbg: selectedSbg,
            comparison: selectedComparison,
            year: selectedYear
        }));


    }
};




export const showFilter = () => {

    return (dispatch, getState) => {

        let user = getState().authentication.user;
        let password = getState().authentication.password;

        dispatch(navigation.navigateToFilter());

        return Promise.all([
            dao.years({user, password}),
            dao.sbgs({user, password})
        ]).then((values) => {

            let years = values[0];
            let sbgs = values[1];

            dispatch(setYears(years));
            dispatch(setSBG(sbgs));
        });
    };
};


export const setYears= (years) => {
    return {
        type: "FILTER_SET_YEARS",
        years
    }
};

export const chooseYear = (year) => {

    return (dispatch, getState) => {

        let {user, password, ...z } = getState().authentication;

        console.log("choose year action");
        console.log(year);
        let promise = dao.monthes({user, password, year:year});

        promise
            .then((monthes)=>{
                dispatch(setMonthes(monthes));
            });
    }
};

export const setMonthes = (monthes) => {
    return {
        type: "FILTER_SET_MONTHES",
        monthes
    }
};

export const setSBG= (sbgs) => {
    return {
        type: "FILTER_SET_SBGS",
        sbgs
    }
};

export const cancelFilter = () => {
    return {
        type: "FILTER_CANCEL"
    }
};

export const confirmFilter = () => {
    return {
        type: "FILTER_CONFIRM"
    }
};
