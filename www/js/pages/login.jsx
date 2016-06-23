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
import { getCompanyDataInYear} from "../query.js";

let store = createStore(hanaApp);

getCompanyDataInYear({user:"DEV01", password:"LeadTek01", sbg:"IIoT", year:"2015"});

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("main")
);
