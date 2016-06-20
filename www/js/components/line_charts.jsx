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
                        毛利率
                    </div>
                </div>
            </div>
        );
    }
}

class CurrentChart extends React.Component{
    render(){
        var bar = '';
        if (this.props.item.arrow == 'up') {
            bar = 'DataChart-bar-up';
        }else if (this.props.item.arrow == 'down') {
            bar = 'DataChart-bar-down';
        }else {
            bar = 'DataChart-bar-normal';
        }

        return(
            <div className="row DataChart-item">
                <div className="col-xs-3" style={{display:'inline-block'}}>
                    <img src="img/icon-current@3x.png" width="6" height="8" />
                    <span className="DataChart-currentTime">
                        {this.props.year}/{this.props.year}
                    </span>
                </div>

                <div className="col-xs-9">
                    <div className={bar} style={{width: this.props.item.number/3}}>
                    </div>
                </div>
            </div>
        );
    }
}

class Chart extends React.Component{
    render(){
        var bar = '';
        if (this.props.item.arrow == 'up') {
            bar = 'DataChart-bar-up';
        }else if (this.props.item.arrow == 'down') {
            bar = 'DataChart-bar-down';
        }else {
            bar = 'DataChart-bar-normal';
        }

        return(
            <div className="row DataChart-item">
                <div className="col-xs-2">
                    {this.props.year}/{this.props.year}
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

        for (var i = 0; i < dataList.length; i++) {
            var monthData = dataList[i];
            var items = monthData.detail;
            var year = monthData.YYMM;
            blocks.push(<Chart item={items.GrossMargin} year={year} />);
        }

        return(
            <div>
                <Label/>
                <CurrentChart item={latestMonthData.detail.GrossMargin} year={year} />
                {blocks}
                <div className="clearfix">
                </div>
            </div>
        );
    }
}

module.exports = LineCharts;
