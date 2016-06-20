/**
 * Created by tim on 6/17/16.
 */

//var assert = require("chai").assert;
import {expect, assert} from 'chai';
import {Arrow} from './sample_conponents.jsx';
import { mount, shallow } from 'enzyme';
var React = require('react');

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});


describe('<Arrow/>', ()=>{

    it('should show up', ()=>{
        const wrapper = shallow(<Arrow arrow="up"/>);
        expect(wrapper.find('img').is('[src="img/icon-up@3x.png"]'))
    });

    it('should show down', ()=>{
        const wrapper = shallow(<Arrow arrow="down"/>);
        expect(wrapper.find('img').is('[src="img/icon-down@3x.png"]'))
    });

});
