/**
 * Created by tim on 6/22/16.
 */

require("../../style/all.scss");
var React = require('react');

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import hanaApp from '../reducers'
import { render } from 'react-dom'
import { AppContainer } from "../containers/app_container"
import {monthes} from "../query.js";

let store = createStore(hanaApp);

monthes({user:'DEV01', password:"LeadTek01", year:"2016"});

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("main")
);
