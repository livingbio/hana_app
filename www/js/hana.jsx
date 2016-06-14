require("../style/all.scss");

var React = require('react');
var Button = require("./button.jsx");
var Cost = require("./components/cost.js");
var Income = require("./components/income.js");
var Gross_Profit = require("./components/gross_profit.js");
var Sales = require("./components/sales.js");
var Gross_Margin = require("./components/gross_margin.js");
var Total_Gross_Margin = require("./components/total_gross_margin.js");
var Profile = require("./components/profile.js");
var render = require('react-dom').render;

render(
    <Cost/>,
    document.getElementById('cost')
);

render(
    <Income/>,
    document.getElementById('income')
);

render(
    <Gross_Profit/>,
    document.getElementById('gross_profit')
);

render(
    <Sales/>,
    document.getElementById('sales')
);

render(
    <Gross_Margin/>,
    document.getElementById('gross_margin')
);

render(
    <Total_Gross_Margin/>,
    document.getElementById('total_gross_margin')
);

render(
    <Profile/>,
    document.getElementById('profile_id')
);
