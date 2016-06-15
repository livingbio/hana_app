require("../style/all.scss");

var React = require('react');
var Button = require("./button.jsx");
var Number_Item = require("./components/number_item.js");
var render = require('react-dom').render;

render(
    <Number_Item/>,
    document.getElementById('DataArea')
);
