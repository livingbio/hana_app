var React = require('react');
import * as filter_actions from "../actions/filter_actions";
import {connect} from 'react-redux'

export class NavBar extends React.Component{
    render(){

        let name = this.props.name;
        let onRightButtonClick = this.props.onRightButtonClick;

        return(
            <div className="Bar">
                <div className="row">
                    <div className="col-xs-2 Toggle-sideBar">
                        <img src="img/icon-bar@3x.png" width="22" height="14" />
                    </div>

                    <div className="col-xs-4 col-xs-offset-2 Nav-title">
                        銷售趨勢
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
            dispatch(filter_actions.showFilter());
        }
    };
};

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
