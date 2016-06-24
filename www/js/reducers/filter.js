/**
 * Created by tim on 6/22/16.
 */

export const filter = (
    state={
        years:[],
        monthes:[],
        selectedComparison: "month",
        selectedYear: 2015,
        sbgs:[]
    },
    action) => {


    console.log("handle filter");
    console.log(action.type);
    console.log(action);

    switch (action.type){

        case "FILTER_UPDATE_SELECTED":

            let {selectedYear, selectedComparison, selectedSbg, ..._} = action;

            return {
                ...state,
                selectedYear, selectedComparison, selectedSbg
            };

        case "FILTER_CHOOSE_YEAR":
            break;

        case "FILTER_SET_YEARS":

            return {
                ...state,
                years: action.years,
                selectedYear:state.selectedYear? state.selectedYear : action.years[0]
            };

        case "FILTER_SET_MONTHES":

            return {
                ...state,
                monthes: action.monthes
            };

        case "FILTER_SET_SBGS":

            return {
                ...state,
                sbgs: action.sbgs,
                selectedSbg: state.selectedSbg ? state.selectedSbg : action.sbgs[0]
            };

        default:
            return state;

    }
};
