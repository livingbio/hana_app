import React from 'react';
import {connect} from 'react-redux';
import {LoginContainer} from "./login.jsx";
import {TrendContainer} from "./trend.jsx";
import {FilterContainer} from "./filter.jsx";

export class App extends React.Component{
    render() {

        let page = this.props.page;
        let idle = this.props.idle;

        if( page === 'login'){
            return <LoginContainer />
        }
        else if( page==='filter'){
            return <FilterContainer />
        }
        else {
            return (
                    <TrendContainer />
            )
        }

    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        page: state.navigation.page
    };
};

export const AppContainer = connect(mapStateToProps)(App);
