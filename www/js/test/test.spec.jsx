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
