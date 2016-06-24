import { combineReducers } from 'redux'
import { authentication } from "./authentication"
import { filter } from "./filter.js"
import { navigation } from "./navigation.js"
import { trend } from "./trend.js"


const hanaApp = combineReducers({
    authentication,
    filter,
    navigation,
    trend
});


export default hanaApp
