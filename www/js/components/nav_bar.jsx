var React = require('react');
import * as filterActions from "../actions/filter_actions";
import * as drawActions from "../actions/drawer";
import {connect} from 'react-redux'

export class NavBar extends React.Component{
    render(){

        let name = this.props.name;
        let onRightButtonClick = this.props.onRightButtonClick;
        let onLeftButtonClick = this.props.onLeftButtonClick;

        return(
            <div className="Bar">
                <div className="row">
                    <div className="col-xs-2 " onClick={onLeftButtonClick}>
                        <img src="img/icon-bar@3x.png" width="22" height="14" />
                    </div>

                    <div className="col-xs-4 col-xs-offset-2 Nav-title">
                        {name}
                    </div>

                    <div className="col-xs-2 col-xs-offset-2 Toggle-filter" onClick={()=>{
                        onRightButtonClick();
                    }}>
                        <img src="img/icon-filter@3x.png" width="22" height="14" />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        name: "銷售趨勢"
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onRightButtonClick: () => {
            dispatch(filterActions.showFilter());
        },
        onLeftButtonClick: () => {
            dispatch(drawActions.toggleDrawer())
        }
    };
};

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
