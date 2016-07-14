require("../../style/all.scss");
import 'react-fastclick';

var React = require('react');
var away = require('away');
import {navigateToLogin} from '../actions/navigation.js';
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import hanaApp from '../reducers';
import { AppContainer } from "../components/app.jsx";


let store = createStore(
    hanaApp,
    compose(
        applyMiddleware(thunk),
        persistState('persist')
    )
);

// Comment the file in the future

//getCompanyDataInYear({user:"DEV01", password:"LeadTek01", sbg:"IIoT", year:"2015"});

const idle = () => {
    console.log("logout");

    store.dispatch(navigateToLogin());

    store.dispatch({
        type: "LOGOUT"
    })
};

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("main")
);

let timer = away(20* 60* 1000);
timer.on('idle', idle);
