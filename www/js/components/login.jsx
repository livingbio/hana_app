var React = require('react');




export class Login extends React.Component{

    render(){

        let onLoginSubmit = this.props.onLoginSubmit;
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
            case "LOGIN_FAIL":
                helpText = "帳密有錯";
                break;
        }

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
                               onLoginSubmit(user_node.value.trim(), password_node.value.trim());
                            }}>

                            <div className="form-group Form-item">

                                <input type="text" className="form-control Login-input"  placeholder="Username"
                                       ref={ node => {
                                        user_node = node
                                   }} />

                            </div>

                            <div className="form-group Form-item">
                                <input type="password" className="form-control Login-input"  placeholder="Password"
                                       ref={ node => {
                                        password_node = node
                                    }} />
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <p className="help-block">{ helpText }</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
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
