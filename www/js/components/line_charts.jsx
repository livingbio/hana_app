var React = require('react');


class Label extends React.Component{
    render(){
        return(
            <div className="row Text-main">

                <div className="col-xs-2">
                    年/月
                </div>

                <div className="col-xs-4 col-xs-offset-3 text-center">
                    <div className="DataChart-title">
                        {this.props.title}
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


class CurrentChart extends React.Component{
    render(){
        var bar = barType(this.props.item.arrow);
        var newyymm = formatYYMM(this.props.yymm);
        var year = newyymm.year;
        var month = newyymm.month;

        return(
            <div className="row DataChart-item">
                <div className="col-xs-4" style={{display:'inline-block'}}>
                    <img src="img/icon-current@3x.png" width="6" height="8" />
                    <span className="DataChart-currentTime">
                        {year}/{month}
                    </span>
                </div>

                <div className="col-xs-8">
                    <div className={bar} style={{width: this.props.item.number/3}}>
                    </div>
                </div>
            </div>
        );
    }
}


class Chart extends React.Component{
    render(){
        var bar = barType(this.props.item.arrow);
        var newyymm = formatYYMM(this.props.yymm);
        var year = newyymm.year;
        var month = newyymm.month;

        return(
            <div className="row DataChart-item">
                <div className="col-xs-2">
                    {year}/{month}
                </div>

                <div className="col-xs-10">
                    <div className={bar} style={{width: this.props.item.number/3}}>
                    </div>
                </div>
            </div>
        );
    }
}


class LineCharts extends React.Component{
    render(){
        var blocks = [];
        var dataList = this.props.dataList;
        var latestMonthData = dataList[dataList.length-1];

        for (var i = dataList.length-1; i >=0 ; i--) {
            var monthData = dataList[i];
            var items = monthData.detail;
            var yymm = monthData.YYMM;
            blocks.push(<Chart item={items.GrossMargin} yymm={yymm} />);
        }

        return(
            <div>
                <Label title={Object.keys(latestMonthData.detail)[2]}/>
                <CurrentChart item={latestMonthData.detail.GrossMargin} yymm={latestMonthData.YYMM} />
                {blocks}
                <div className="clearfix">
                </div>
            </div>
        );
    }
}


module.exports = LineCharts;
