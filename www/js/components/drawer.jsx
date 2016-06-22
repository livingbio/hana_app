var React = require('react');

class Drawer extends React.Component{
    render(){
        return(
            <div id="sideBar">
                <div className="row Profile">
                    <div className="col-xs-1">
                        <img src="img/icon_profile@3x.png" width="26" height="26"/>
                    </div>
                    <div className="col-xs-10 Profile-ID">
                        {this.props.profileID}
                    </div>
                </div>

                <div className="">
                    Log out
                </div>
            </div>
        );
    }
}

module.exports = Drawer;
