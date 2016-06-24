import * as dao from "../query";


export const updateDataForAllYear = ({sbg})=>{

    return (dispatch, getState) => {

        let authentication = getState().authentication;

        let cacheDataKey = "YEAR" + sbg + user;

        let trendState = getState().trend;

        if(trendState[cacheDataKey]){
            return;
        }

        let promise = dao.getCompanyDataAllYear({
            sbg,
            user: authentication.user,
            password: authentication.password
        });

        promise.then((data)=> {
            dispatch({
                type: "TREND_SETUP_YEAR_DATA",
                key: cacheDataKey,
                data: data
            })
        })
    }
};


