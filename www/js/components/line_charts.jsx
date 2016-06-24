import React from 'react';
import {connect} from 'react-redux';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Label extends React.Component{
    render(){
        let label = this.props.label;

        return(
            <div className="row Text-main">
                <div className="col-xs-2">
                    年/月
                </div>
                <div className="col-xs-4 col-xs-offset-3 text-center">
                    <div className="DataChart-title">
                        {label}
                    </div>
                </div>
            </div>
        );
    }
}


function formatYYMM(yymm) {
    var yymmList = yymm.toString().split("");
    var year = '';
    var month = '';
    for (var i = 0; i < yymmList.length; i++) {
        if (i < 4) {
            year += yymmList[i];
        }else{
            month += yymmList[i];
        }
    }
    return {
        'year': year,
        'month': month,
    };
}


function barType(arrow){
    var bar = '';
    switch (arrow) {
        case 'up':
            bar = 'DataChart-bar-up';
            break;
        case 'down':
            bar = 'DataChart-bar-down';
            break;
        default:
            bar = 'DataChart-bar-normal';
            break;
    }
    return bar;
}


function convertWidthPercent(number){
    var numberDigit = number.toString().length;
    var standard = 1;

    for (var i = 0; i < numberDigit; i++) {
        standard *= 10;
    }

    var widthPercent = (number/standard)*100;

    return widthPercent;
}


class CurrentChart extends React.Component{
    render(){
        var bar = barType(this.props.item.arrow);
        bar += ' DataBlock-bar-is-shown'
        var newyymm = formatYYMM(this.props.yymm);
        var year = newyymm.year;
        var month = newyymm.month;
        var widthPercent = convertWidthPercent(this.props.item.number);
        var transition = 'width 2s linear 1s';

        return(
            <div className="row DataChart-item">
                <div className="col-xs-3" style={{display:'inline-block'}}>
                    <img src="img/icon-current@3x.png" width="6" height="8" />
                    <span className="DataChart-currentTime">
                        {year}/{month}
                    </span>
                </div>

                <div className="col-xs-9">
                    <div className={bar} style={{width: widthPercent + '%', transition: transition}}>
                    </div>
                </div>
            </div>
        );
    }
}


class Chart extends React.Component{
    render(){

        let label = this.props.label;
        var bar = "DataChart-bar-normal";

        return(
            <div className="row DataChart-item">
                <div className="col-xs-2">
                    {label}
                </div>

                <div className="col-xs-10">
                      <div className={bar} style={{width:100}}> </div>
                </div>
            </div>
        );
    }
}


export class LineCharts extends React.Component{
    render(){
        let label = this.props.label;
        let points = this.props.points;
        let blocks = [];
        for (let i = 0; i< points.length; ++i){
            let data = points[i];
            blocks.push(<Chart key={i} data={data}/>);
        }

        return(
            <div>
                <Label label={label}/>
                    {blocks}
                <div className="clearfix">
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    let points = [
        {label: 2010, value: 1000},
        {label: 2013, value: 2000}
    ];

    return {
        label: "data",
        points
    };
};



export const LineChartsContainer = connect(mapStateToProps)(LineCharts);
