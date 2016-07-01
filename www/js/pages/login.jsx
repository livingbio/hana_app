require("../../style/all.scss");
import 'react-fastclick';
import $ from 'jquery';

var React = require('react');
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { main } from '../hana_jquery';

import hanaApp from '../reducers';
import { AppContainer } from "../components/app.jsx";
import { getCompanyDataInYear } from "../query.js";


let store = createStore(
    hanaApp,
    compose(
        applyMiddleware(thunk),
        persistState('persist')
    )
);

// Comment the file in the future

//getCompanyDataInYear({user:"DEV01", password:"LeadTek01", sbg:"IIoT", year:"2015"});

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("main")
);

/*
render(
    <Provider store={store}>
        <LineChartsContainer/>
    </Provider>,
    document.getElementById("main")
);
 */

$(document).ready(main);
