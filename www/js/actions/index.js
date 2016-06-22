/**
 * Created by tim on 6/22/16.
 */


export const login = (user, password) => {
    return {
        type: "LOGIN",
        user,
        password
    }
};
