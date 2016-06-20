require("../style/all.scss");

var React = require('react');
var $ = require("jquery");
var Button = require("./button.jsx");
var Number_Item = require("./components/number_item.jsx");
var Line_Charts = require("./components/line_charts.jsx");
var Nav_Bar = require("./components/nav_bar.jsx");
var Filter = require("./components/filter.jsx");
var Drawer = require("./components/drawer.jsx");
var render = require('react-dom').render;

var data = [
    {
        'YYMM': 201512,
        'detail': {
            'SourceCost': {
                'number': 456,
                'label': 'SourceCost',
                'kind': 'money',
                'arrow': 'up',
            },
            'Amt': {
                'number': 400,
                'label': 'Amt',
                'kind': 'money',
                'arrow': 'up',
            },
            'GrossMargin': {
                'number': 400,
                'label': 'GrossMargin',
                'kind': 'money',
                'arrow': 'up',
            },
            'GrossMarginRate': {
                'number': 500,
                'label': 'GrossMarginRate',
                'kind': 'money',
                'arrow': 'up',
            },
            'SBG': {
                'number': 550,
                'label': 'SBG',
                'kind': 'money',
                'arrow': 'down',
            },
        },
    }, {
        'YYMM': 201602,
        'detail': {
            'SourceCost': {
                'number': 456,
                'label': 'SourceCost',
                'kind': 'money',
                'arrow': 'up',
            },
            'Amt': {
                'number': 400,
                'label': 'Amt',
                'kind': 'money',
                'arrow': 'up',
            },
            'GrossMargin': {
                'number': 600,
                'label': 'GrossMargin',
                'kind': 'money',
                'arrow': 'down',
            },
            'GrossMarginRate': {
                'number': 500,
                'label': 'GrossMarginRate',
                'kind': 'money',
                'arrow': 'up',
            },
            'SBG': {
                'number': 550,
                'label': 'SBG',
                'kind': 'money',
                'arrow': 'down',
            },
        },
    },
];

class Wrapper extends React.Component{
    render(){
        return(
            <div>
                <Drawer />
                <Filter />
                <div id="main">
                    <Nav_Bar />
                    <div className="container">
                        <Number_Item dataList={this.props.dataList} />
                        <Line_Charts dataList={this.props.dataList} />
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <Wrapper dataList={data}/>,
    document.getElementById('Body')
);
