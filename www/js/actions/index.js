import * as dao from "../query";
import * as filter from "./filter_actions";

export const loginSuccess = ({user, password}) => {
    return {
        type: "LOGIN_SUCCESS",
        user, password
    }
};

export const loginFail = () => {
    return {
        type: "LOGIN_FAIL"
    }
};


export const confirmLogin = ({user, password}) => {
    return (dispatch) => {

        if (!user.length || !password.length){
            dispatch(loginIntegrityCheck(name,password));
            return;
        }

        let promise = dao.years({user, password});

        promise
            .then((data) =>{
                console.log('success of year api');
                dispatch(loginSuccess({user, password}));
                dispatch(filter.showFilter({user, password}));
            })
            .catch((data) =>{
                console.log('fail of year api');
                console.log(data);
                dispatch(loginFail());
            });

    }
};


export const loginIntegrityCheck = (user, password) => {
    return {
        type: "LOGIN_INTEGRITY_CHECK",
        user, password
    }
};

