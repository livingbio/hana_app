import React from 'react';
//var React = require('react');
var $ = require("jquery");

const USERNAME = 'DEV01';
const PASSWORD = 'LeadTek01';

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}

class Button extends React.Component{

    handleClick(envent){
        console.log("yo");
        $.ajax({
            url: "http://172.16.17.10:8001/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SA LESTREND?$select=YYYY&$format=json",
            beforeSend: function (xhr){
                xhr.setRequestHeader('Authorization', make_base_auth(USERNAME, PASSWORD));
            }
        })
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>
                this is a button yo
            </button>
        );
    }
}

module.exports = Button;
