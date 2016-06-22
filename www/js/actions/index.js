/**
 * Created by tim on 6/22/16.
 */


export const loginSuccess = () => {
    return {
        type: "LOGIN_SUCCESS"
    }
};

export const loginFail = () => {
    return {
        type: "LOGIN_FAIL"
    }
};


export const loginIntegrityCheck = (user, password) => {
    return {
        type: "LOGIN_INTEGRITY_CHECK",
        user, password
    }
};
