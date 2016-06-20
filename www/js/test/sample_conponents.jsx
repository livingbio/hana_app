var React = require('react');
export class Arrow extends React.Component{
    render(){
        var src = '';
        if (this.props.arrow == 'up') {
            src = "img/icon-up@3x.png";
        }else {
            src = "img/icon-down@3x.png";
        }
        return(
            <div className="pull-right DataBlock-arrow">
                <img src={src} width="19" height="19" />
            </div>
        );
    }
}