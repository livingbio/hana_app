import React from 'react';
import {connect} from 'react-redux';
import {makeTrendStateKey} from "../keys.js";
import  * as trendAction from '../actions/trend_action';
import {translateCategory} from "../translateCategory.js";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Label extends React.Component{
    render(){
        let label = this.props.label;

        return(
            <div className="row Text-main">
                <div className="col-xs-3">
                    年/月
                </div>
                <div className="col-xs-4 col-xs-offset-1 text-center">
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
        'month': month
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

        let line = this.props.line;
        let index = this.props.index;

        let onChartClick = this.props.onChartClick;

        var bar = "DataChart-bar-up";

        return(
            <div className="row DataChart-item"
                 onClick={ ()=>{
                    onChartClick(index)
                 }}>

                <div className="col-xs-2">
                    {line.label}
                </div>

                <div className="col-xs-9">
                      <div className={bar} style={{width:`${line.propotion}%`}}> </div>
                </div>
            </div>
        );
    }
}

const mapChartStateToProps = (state, ownProps) => {
    let trend = state.trend;
    return {
        ...ownProps,
        currentIndex: trend.index
    };
};

const mapChartDispatchToProps = (dispatch) => {
    return {
        onChartClick: (index) => {
            console.log('index');
            console.log(index);
            dispatch(trendAction.selectSeriesIndex(index));
        }
    };
};

export const ChartContainer = connect(mapChartStateToProps, mapChartDispatchToProps)(Chart);


export class LineCharts extends React.Component{
    render(){
        let label = this.props.label;
        let lines = this.props.lines;
        let index = this.props.index;  // TODO, current index

        let blocks = [];

        let values = lines
                        .map((obj)=>{
                            return obj.value;
                        });

        let sum = values
                    .reduce((a,b) =>{
                        return a + b;
                    }, 0);

        let max = Math.max(...values);

        lines = lines.map((line)=>{
            return {
                ...line,
                propotion: ((line.value/sum) * 100 * (sum/max)) // make line better looking
            };
        });

        for (let i = 0; i< lines.length; ++i){
            let line = lines[i];
            blocks.push(<ChartContainer key={i} line={line} index={i}/>);
        }

        return(
            <div>
                <Label label={label}/>
                    {blocks}
                <div className="clearfix"> </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {

    const authentication = state.authentication;
    const filter = state.filter;

    const trend = state.trend;

    let trendStateKey = makeTrendStateKey({
        sbg: filter.selectedSbg,
        comparison: filter.selectedComparison,
        year: filter.selectedYear,
        user: authentication.user
    });

    const series = trend[trendStateKey];

    let lines = series.map((data, index)=>{

        return {
            label: data.key,
            value: data.detail[trend.category].number,
            index
        }
    });

    return {
        label: translateCategory(trend.category),
        index: trend.index,
        lines
    };
};


export const LineChartsContainer = connect(mapStateToProps)(LineCharts);

