/**
 * Created by tim on 6/22/16.
 */

export const authentication = (state={}, action) => {

    switch (action.type){
        case "LOGIN_INTEGRITY_CHECK":
            if (action.user.length == 0){
                return {
                    authorized: false,
                    status: "USER_NAME_EMPTY",
                    user: action.user,
                    password: action.password
                }
            }
            else if (action.password.length == 0){
                return {
                    authorized: false,
                    status: "PASSWORD_EMPTY",
                    user: action.user,
                    password: action.password
                }
            }

        case "LOGIN_START":

            return {
                ...state,
                user: action.user,
                password: action.password,
                status: "LOGGING"
            };

        case "LOGIN_SUCCESS":
            return {
                authorized: true,
                status: "LOGGED_IN",
                user: action.user,
                password: action.password
            };
        case "LOGIN_FAIL":
            return {
                authorized: false,
                status: "LOGIN_FAIL",
                user: "",
                password: ""
            };

        case "LOGOUT":
            return {
                authorized: false,
                status: "FIRST_TIME",
                user: "",
                password: ""
            };

        default:

            return state;
    }

};
