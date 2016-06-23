var React = require('react');

export class NavBar extends React.Component{
    render(){
        return(
            <div className="Bar">
                <div className="row">
                    <div className="col-xs-2 Toggle-sideBar">
                        <img src="img/icon-bar@3x.png" width="22" height="14" />
                    </div>

                    <div className="col-xs-4 col-xs-offset-2 Nav-title">
                        銷售趨勢
                    </div>

                    <div className="col-xs-2 col-xs-offset-2 Toggle-filter">
                        <img src="img/icon-filter@3x.png" width="22" height="14" />
                    </div>

                </div>
            </div>
        );
    }
}
