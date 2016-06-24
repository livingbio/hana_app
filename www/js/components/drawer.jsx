var React = require('react');
import {connect} from 'react-redux'
import {navigateToLogin} from '../actions/navigation.js';


export class Drawer extends React.Component{

    render(){

        const logOutCallback = this.props.logOutCallback;

        return(
            <div id="sideBar">
                <div className="row Profile">
                    <div className="col-xs-1">
                        <img src="img/icon_profile@3x.png" width="26" height="26"/>
                    </div>
                    <div className="col-xs-10 Profile-ID">
                        {this.props.user}
                    </div>
                </div>

                <div className="Logout" onClick={logOutCallback}>
                    Log out
                </div>
            </div>
        );
    }
};


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logOutCallback: () => {

            dispatch(navigateToLogin());
            dispatch({
                type: "LOGOUT"
            });
        }
    };
};


export const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(Drawer);
