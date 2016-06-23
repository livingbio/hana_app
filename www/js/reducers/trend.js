/**
 * Created by tim on 6/22/16.
 */

export const authentication = (state={}, action) => {


    console.log("handle trend");
    switch (action.type){
        case "VIEW_DEFAULT":
        case "LOGIN_SUCCESS":
        case "LOGIN_FAIL":
        case "LOGOUT":
        default:
            return state;
    }

};
