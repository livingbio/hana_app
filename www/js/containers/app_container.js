import {connect} from 'react-redux'

import {login} from "../actions"
import {App} from "../components/app.jsx"

const mapStateToProps = (state, ownProps) => {
    const authentication = state.authentication;
    if(authentication.authorized){
        return {
            page: 'trend'
        };
    }
    else{
        return {
            page: 'login'
        };
    }
};


export const AppContainer = connect(mapStateToProps)(App);
