import React from 'react';
import {connect} from 'react-redux';
import {LoginContainer} from "./login.jsx";
import {TrendContainer} from "./trend.jsx";
import {FilterContainer} from "./filter.jsx";


export const App = ({page}) => {

    if( page === 'login'){
        return <LoginContainer />
    }
    else if( page==='filter'){
        return <FilterContainer />
    }
    else {
        return (<TrendContainer />)
    }

};


const mapStateToProps = (state, ownProps) => {
    return {
        page: state.navigation.page
    };
};


export const AppContainer = connect(mapStateToProps)(App);
