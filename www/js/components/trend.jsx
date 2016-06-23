
var React = require('react');

var Number_Item = require("./number_item.jsx");
var Line_Charts = require("./line_charts.jsx");
var Nav_Bar = require("./nav_bar.jsx");
var Filter = require("./filter.jsx");
var Drawer = require("./drawer.jsx");

export class Trend extends React.Component{
    render(){
        return(
            <div>
                <Drawer profileID='GliaCloud'/>
                <Filter username='GliaCloud' password='GliaCloud'/>
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