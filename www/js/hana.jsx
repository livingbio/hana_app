require("../style/all.scss");

var React = require('react');
var render = require('react-dom').render;

var {NumberItem} = require("./components/number_item.jsx");
var {LineCharts} = require("./components/line_charts.jsx");
var {NavBar} = require("./components/nav_bar.jsx");
var {Filter} = require("./components/filter.jsx");
var {Drawer} = require("./components/drawer.jsx");

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
                'arrow': 'down',
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
            'Sale': {
                'number': 500,
                'label': 'Sale',
                'kind': 'money',
                'arrow': 'down',
            },
            'SBG': {
                'number': 550,
                'label': 'SBG',
                'kind': 'money',
                'arrow': 'down',
            },
        },
    }, {
        'YYMM': 201601,
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
            'Sale': {
                'number': 500,
                'label': 'Sale',
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
                'arrow': 'normal',
            },
            'GrossMarginRate': {
                'number': 500,
                'label': 'GrossMarginRate',
                'kind': 'money',
                'arrow': 'up',
            },
            'Sale': {
                'number': 500,
                'label': 'Sale',
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
    }
];

class Wrapper extends React.Component{
    render(){
        return(
            <div>
                <Drawer profileID='GliaCloud'/>
                <Filter username='GliaCloud' password='GliaCloud'/>
                <div id="main">
                    <NavBar />
                    <div className="container">
                        <NumberItem dataList={this.props.dataList} />
                        <LineCharts dataList={this.props.dataList} />
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
