import React from 'react'
import {LoginContainer} from "../containers/login_container"


export const App = ({page}) => {

    if(page==='trend'){
        return (<h2>Your Are logged in</h2>)
    }
    else if(page=='login'){
        return <LoginContainer />
    }

};




