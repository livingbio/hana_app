import { combineReducers } from 'redux'
import { authentication } from "./authentication"
import { filter } from "./filter.js"
import { navigation } from "./navigation.js"
import { trend } from "./trend.js"
import { drawer } from "./drawer.js"
import { persist } from "./persist.js"


const hanaApp = combineReducers({
    drawer,
    authentication,
    filter,
    navigation,
    trend,
    persist
});


export default hanaApp
