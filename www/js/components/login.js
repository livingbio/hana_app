var React = require('react');

class Login extends React.Component{
    render(){
        return(
            <div>
                <div class="SapLogo">
                    <div class="row">
                        <div class="col-xs-2">
                            <img src="img/logo-sap@3x.png" width="56" height="29" />
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="Login-title">
                    SAP HANA
                    </div>

                    <div class="Login-description">
                    SAP HANA is the Platform for Next-Generation Applications and Analytics
                    </div>

                    <div class="Login-form">
                        <form>
                            <div class="form-group Form-item">
                                <input type="email" class="form-control Login-input" id="exampleInputEmail1" placeholder="ID">
                            </div>

                            <div class="form-group Form-item">
                                <input type="password" class="form-control Login-input" id="exampleInputPassword1" placeholder="Password">
                            </div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <button type="submit" class="btn btn-default Login-button">LOG IN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Login;
