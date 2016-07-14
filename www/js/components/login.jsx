var React = require('react');
import {connect} from 'react-redux'

import { confirmLogin } from "../actions"
import { saveToStore } from "../actions/persist_actions"
var Spinner = require('react-spinkit');



export class Login extends React.Component{

    render(){

        let onLoginSubmit = this.props.onLoginSubmit;
        let status = this.props.status;

        let user = this.props.user;
        let password = this.props.password;

        let user_node;
        let password_node;
        let save_credential;


        let helpText = "";

        switch(status){
            case "USER_NAME_EMPTY":
                helpText = "使用者名稱不可為空";
                break;
            case "PASSWORD_EMPTY":
                helpText = "密碼不可為空";
                break;
            case "LOGIN_FAIL":
                helpText = "帳密有錯";
                break;
        }

        console.log('=== status');
        console.log(status);

        return(
            <div>

                <div className="container">
                    <div className="Logo-leadtek">
                        <img src="img/logo-leadtek@3x.png" width="108" height="19" />
                    </div>

                    <div className="Logo-sap">
                        <img src="img/logo-sap@3x.png" width="222" height="65" />
                    </div>

                    <div className="Login-description">
                        SAP HANA is the Platform for Next-Generation Applications and Analytics
                    </div>

                    <div className="Login-form">

                        <form onSubmit={e=>{
                               e.preventDefault();
                               onLoginSubmit(user_node.value.trim(), password_node.value.trim(), save_credential.checked);
                               return false;
                            }}>

                            <div className="form-group Form-item">

                                <input type="text" className="form-control Login-input"  placeholder="Username"
                                       defaultValue={user}
                                       ref={ node => {
                                        user_node = node
                                   }} />

                            </div>

                            <div className="form-group Form-item">
                                <input type="password" className="form-control Login-input"  placeholder="Password"
                                       defaultValue={password}
                                       ref={ node => {
                                        password_node = node
                                    }} />
                            </div>

                                <div class="checkbox">
                                  <label className='Login-input' style={{fontSize: '14px'}}><input type="checkbox"
                                         ref={ node => {
                                               save_credential = node
                                  }}/> 記住帳密 </label>
                                </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <p className="help-block">{ helpText }</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-xs-12 relative" >
                                    <button type="submit" className="btn btn-default Login-button">LOG IN</button>
                                    {(() => {
                                        if(status == "LOGGING") {
                                            return (
                                                <div className="row" style={{position: "absolute", top: "10px", left: '30px'}} >
                                                    <div className="col-xs-12">
                                                        <Spinner spinnerName='pulse' />
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const authentication = state.authentication;
    const persist = state.persist;
    return {
        user: persist.user,
        password: persist.password,
        status: authentication.status
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSubmit: (user, password, checked) => {
            console.log('user');
            console.log(user);
            dispatch(confirmLogin({user, password}));

            if(checked){
                dispatch(saveToStore({key:'user', value: user}));
                dispatch(saveToStore({key:'password', value: password}));
            }

        }
    };
};


export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
