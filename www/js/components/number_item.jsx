var React = require('react');
var $ = require("jquery");

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
        var label= '';
        switch (this.props.label) {
            case 'SourceCost':
                label = '成本';
                break;
            case 'Amt':
                label = '收入';
                break;
            case 'GrossMargin':
                label = '毛利';
                break;
            case 'GrossMarginRate':
                label = '毛利率';
                break;
            default:
                label = '測試';
                break;
        }

        return(
            <div className="Text-main">
                {label}
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

                    <Arrow arrow={this.props.item.arrow}/>

                    <Label label={this.props.item.label}/>

                    <Number number={this.props.item.number} kind={this.props.item.kind}/>

                </div>
            </div>
        );
    }
}

class NumberItem extends React.Component{
    render(){
        var items = this.props.dataList[0].detail;
        var blocks = [];

        for (var key in items) {
            blocks.push(<DataBlock item={items[key]}/>);
            // console.log(items[key]);
        }

        return(
            <div className="row DataArea" id="DataArea">
                {blocks}

                <div className="clearfix">
                </div>
            </div>
        );
    }
}

module.exports = NumberItem;
