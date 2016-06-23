import {connect} from 'react-redux'

import {loginSuccess, loginIntegrityCheck, loginFail} from "../actions"
import {Login} from "../components/login.jsx"
import {years} from "../query"

const mapStateToProps = (state, ownProps) => {
    const authentication = state.authentication;
    return {
        status: authentication.status
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginSubmit: (user, password) => {

            if (!user.length || !password.length){
                dispatch(loginIntegrityCheck(name,password));
            }
            else{

                let promise = years(user, password);

                promise
                    .then((data) =>{
                        console.log(data);
                        dispatch(loginSuccess());
                    })
                    .catch(() =>{
                        console.log("error?");
                        dispatch(loginFail());
                    });

            }

        }
    };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
