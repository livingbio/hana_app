/**
 * Created by tim on 6/22/16.
 */

require("../../style/all.scss");
var React = require('react');

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import hanaApp from '../reducers';
import { render } from 'react-dom';
import { AppContainer } from "../components/app.jsx";
import { getCompanyDataInYear} from "../query.js";
import thunk from 'redux-thunk';
import {LineChartsContainer} from '../components/line_charts.jsx';
let store = createStore(
    hanaApp,
    applyMiddleware(thunk)
);

getCompanyDataInYear({user:"DEV01", password:"LeadTek01", sbg:"IIoT", year:"2015"});

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
