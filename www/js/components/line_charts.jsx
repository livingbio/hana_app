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
        if (this.props.item.status == 'up') {
            bar = 'DataChart-bar-up';
        }else if (this.props.item.status == 'down') {
            bar = 'DataChart-bar-down';
        }else {
            bar = 'DataChart-bar-normal';
        }

        return(
            <div className="row DataChart-item">
                <div className="col-xs-3" style={{display:'inline-block'}}>
                    <img src="img/icon-current@3x.png" width="6" height="8" />
                    <span className="DataChart-currentTime">
                        {this.props.item.year}/{this.props.item.month}
                    </span>
                </div>

                <div className="col-xs-9">
                    <div className={bar} style={{width: this.props.item.number}}>
                    </div>
                </div>
            </div>
        );
    }
}

class Chart extends React.Component{
    render(){
        var bar = '';
        if (this.props.item.status == 'up') {
            bar = 'DataChart-bar-up';
        }else if (this.props.item.status == 'down') {
            bar = 'DataChart-bar-down';
        }else {
            bar = 'DataChart-bar-normal';
        }

        return(
            <div className="row DataChart-item">
                <div className="col-xs-2">
                    {this.props.item.year}/{this.props.item.month}
                </div>

                <div className="col-xs-10">
                    <div className={bar} style={{width: this.props.item.number}}>
                    </div>
                </div>
            </div>
        );
    }
}

var items = [
    {
        'year': 2016,
        'month': 5,
        'number': 180,
        'status': 'normal',
    }, {
        'year': 2016,
        'month': 4,
        'number': 190,
        'status': 'down',
    }, {
        'year': 2016,
        'month': 3,
        'number': 210,
        'status': 'up',
    }, {
        'year': 2016,
        'month': 2,
        'number': 150,
        'status': 'down',
    }, {
        'year': 2016,
        'month': 1,
        'number': 160,
        'status': 'down',
    }, {
        'year': 2015,
        'month': 12,
        'number': 190,
        'status': 'up',
    }, {
        'year': 2015,
        'month': 11,
        'number': 140,
        'status': 'up',
    }, {
        'year': 2015,
        'month': 10,
        'number': 120,
        'status': 'up',
    }, {
        'year': 2015,
        'month': 9,
        'number': 110,
        'status': 'down',
    }, {
        'year': 2015,
        'month': 8,
        'number': 160,
        'status': 'up',
    }
];

class LineCharts extends React.Component{
    render(){
        var blocks = [];
        for (var i = 1; i < items.length; i++) {
            blocks.push(
                <Chart item={items[i]}/>
            );
        }

        return(
            <div>
                <Label/>
                <CurrentChart item={items[0]}/>
                {blocks}
                <div className="clearfix">
                </div>
            </div>
        );
    }
}

module.exports = LineCharts;
