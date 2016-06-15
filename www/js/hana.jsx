require("../style/all.scss");

var React = require('react');
var Button = require("./button.jsx");
var Number_Item = require("./components/number_item.js");
var Line_Charts = require("./components/line_charts.js");
var Nav_Bar = require("./components/nav_bar.js");
var Filter = require("./components/filter.js");
var Drawer = require("./components/drawer.js");
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
