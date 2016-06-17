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


class Wrapper extends React.Component{
    render(){
        return(
            <div>
                <Drawer />
                <Filter />
                <div id="main">
                    <Nav_Bar />
                    <div className="container">
                        <Number_Item />
                        <Line_Charts />
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <Wrapper/>,
    document.getElementById('Body')
);
