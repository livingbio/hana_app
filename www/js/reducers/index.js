import { combineReducers } from 'redux'
import { authentication } from "./login"


const hanaApp = combineReducers({
    authentication
});


export default hanaApp
