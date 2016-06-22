import {connect} from 'react-redux'

import {login} from "../actions"
import {Login} from "../components/login.jsx"

const mapStateToProps = (state, ownProps) => {
    const authentication = state.authentication;
    return {
        user: authentication.user,
        password: authentication.password,
        authorized: authentication.authorized,
        status: authentication.status
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginSubmit: (name, password) => {
            dispatch(login(name,password))
        }
    };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
