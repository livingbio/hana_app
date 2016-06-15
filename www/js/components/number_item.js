var React = require('react');
// var $ = require("jquery");

class Arrow extends React.Component{
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

class Label extends React.Component{
    render(){
        return(
            <div className="Text-main">
                {this.props.label}
            </div>
        );
    }
}

class Number extends React.Component{
    render(){
        var value = '';
        if (this.props.kind == 'money') {
            value = '$' + this.props.number;
        }else {
            value = this.props.number + '%';
        }

        return(
            <div className="DataBlock-number">
                {value}
            </div>
        );
    }
}

class DataBlock extends React.Component{
    render(){
        return(
            <div className="col-xs-6 DataBlock-col">
                <div className="DataBlock">

                    <Arrow arrow={this.props.arrow}/>

                    <Label label={this.props.label}/>

                    <Number number={this.props.number} kind={this.props.kind}/>

                </div>
            </div>
        );
    }
}

var items = [
    {
        'number': 263,
        'label': '成本',
        'kind': 'money',
        'arrow': 'up',
    }, {
        'number': 456,
        'label': '收入',
        'kind': 'money',
        'arrow': 'down',
    }, {
        'number': 478,
        'label': '毛利',
        'kind': 'money',
        'arrow': 'up',
    }, {
        'number': 231,
        'label': '銷量',
        'kind': 'money',
        'arrow': 'down',
    }, {
        'number': 845,
        'label': '毛利率',
        'kind': 'percent',
        'arrow': 'down',
    }, {
        'number': 561,
        'label': '總和_毛利率',
        'kind': 'percent',
        'arrow': 'up',
    }
];

class Number_Item extends React.Component{
    render(){
        var blocks = [];
        for (var i = 0; i < items.length; i++) {
            blocks.push(<DataBlock arrow={items[i].arrow} label={items[i].label} number={items[i].number} kind={items[i].kind}/>);
        }

        return(
            <div>
                {blocks}
            </div>
        );
    }
}

module.exports = Number_Item;
