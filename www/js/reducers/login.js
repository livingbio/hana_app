/**
 * Created by tim on 6/22/16.
 */

export const authentication = (state={}, action) => {


    console.log("handle authentication");
    switch (action.type){

        case "LOGIN":
            if (!action.user.length){
                return {
                    authorized: false,
                    status: "USER_NAME_EMPTY",
                    user: action.user,
                    password: action.password
                }
            }
            else if (!action.user.length){
                return {
                    authorized: false,
                    status: "PASSWORD_EMPTY",
                    user: action.user,
                    password: action.password
                }
            }
            else if (action.user === 'tim'){
                return {
                    authorized: true,
                    status: "LOGGED_IN",
                    user: action.user,
                    password: action.password
                }
            }
            else{
                return {
                    authorized: false,
                    status: "VALIDATION_FAIL",
                    user: action.user,
                    password: action.password
                }
            }

        case "LOGOUT":
            return {
                authorized: false,
                status: "FIRST_TIME",
                user: "",
                password: ""
            }

        default:

            return state;
    }

};
