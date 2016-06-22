var React = require('react');




export class Login extends React.Component{

    render(){

        let onLoginSubmit = this.props.onLoginSubmit;
        let username = this.props.user;
        let password = this.props.password;
        let status = this.props.status;

        let user_node;
        let password_node;


        let helpText = "";

        switch(status){
            case "USER_NAME_EMPTY":
                helpText = "使用者名稱不可為空";
                break;
            case "PASSWORD_EMPTY":
                helpText = "密碼不可為空";
                break;
            case "VALIDATION_FAIL":
                helpText = "帳密有錯";
                break;
        }

        return(
            <div>
                <div className="SapLogo">
                    <div className="row">
                        <div className="col-xs-2">
                            <img src="img/logo-sap@3x.png" width="56" height="29" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="Login-title">
                        SAP HANA
                    </div>

                    <div className="Login-description">
                        SAP HANA is the Platform for Next-Generation Applications and Analytics
                    </div>

                    <div class="Login-form">
                        <form onSubmit={e=>{
                           e.preventDefault();
                           onLoginSubmit(user_node.value.trim(), password_node.value.trim());
                    }}>
                            <div class="form-group Form-item">

                                <input type="text" className="form-control Login-input"  placeholder="Username"
                                       ref={ node => {
                                        user_node = node
                                   }} />

                            </div>

                            <div class="form-group Form-item">
                                <input type="password" className="form-control Login-input"  placeholder="Password"
                                       ref={ node => {
                                        password_node = node
                                    }} />
                            </div>

                            <div class="row">
                                <div className="col-xs-12">
                                    <p class="help-block">{ helpText }</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <button type="submit" className="btn btn-default Login-button">LOG IN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
