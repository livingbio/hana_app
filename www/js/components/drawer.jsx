var React = require('react');
import {connect} from 'react-redux';
import {default as MotionDrawer} from 'react-motion-drawer';
import * as drawActions from "../actions/drawer";
import {navigateToLogin} from '../actions/navigation.js';


export class Drawer extends React.Component{

    render(){

        const logOutCallback = this.props.logOutCallback;
        const setupDrawer = this.props.setupDrawer;
        const user = this.props.user;
        const open = this.props.open;

        return(
            <MotionDrawer open={open} width={270} onChange={(isOpen)=>{
                setupDrawer(isOpen);
            }}>
                <div className="drawer">
                    <div className="row">
                        <div className="col-xs-1">
                            <img src="img/icon_profile@3x.png" width="26" height="26"/>
                        </div>
                        <div className="col-xs-10 Profile-ID">
                            {user}
                        </div>
                    </div>

                    <div className="" onClick={logOutCallback}>
                        Log out
                    </div>
                </div>

            </MotionDrawer>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const drawer = state.drawer;
    return {
        ...ownProps,
        open: drawer.open
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logOutCallback: () => {

            dispatch(navigateToLogin());
            dispatch({
                type: "LOGOUT"
            });
        },
        setupDrawer: (isOpen) => {
            dispatch(drawActions.setupDrawer({open:isOpen}))
        }
    };
};


export const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(Drawer);
