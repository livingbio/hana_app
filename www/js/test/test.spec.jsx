/**
 * Created by tim on 6/17/16.
 */

//var assert = require("chai").assert;
import {expect, assert} from 'chai';
import {Arrow} from './sample_conponents.jsx';
import {Number} from './components/number_item.jsx';
import {Label} from './components/number_item.jsx';
import {Drawer} from '../components/drawer.jsx';
import {Filter} from '../components/filter.jsx';
import {NavBar} from '../components/nav_bar.jsx';
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
        expect(wrapper.contains(<img src="img/icon-up@3x.png" width="19" height="19" />)).to.equal(true);
    });

    it('should show down', ()=>{
        const wrapper = shallow(<Arrow arrow="down"/>);
        expect(wrapper.contains(<img src="img/icon-down@3x.png" width="19" height="19" />)).to.equal(true);
    });
});


describe('<Number/>', ()=>{

    it('should has className DataBlock-number', ()=>{
        const wrapper = shallow(<Number number=500 kind='money'/>);
        expect(wrapper.hasClass("DataBlock-number").to.equal(true);
    });

    it('should has $ when kind equals money', ()=>{
        const wrapper = shallow(<Number number=500 kind='money'/>);
        expect(wrapper.text()).to.contain("$");
    });

    it('should has % when kind equals percent', ()=>{
        const wrapper = shallow(<Number number=500 kind='percent'/>);
        expect(wrapper.text()).to.contain("%");
    });
});


describe('<Label/>', ()=>{

    it('should show 成本', ()=>{
        const wrapper = shallow(<Label label="SourceCost"/>);
        expect(wrapper.text()).to.contain("成本");
    });
});


describe('<Drawer/>', ()=>{

    it('should have idName sideBar', ()=>{
        const wrapper = shallow(<Drawer profileID="GliaCloud"/>);
        expect(wrapper.contains(<div id="sideBar"/>)).to.equal(true);
    });
});


describe('<Filter/>', ()=>{

    it('should render three form labels', ()=>{
        const wrapper = shallow(<Filter />);
        expect(wrapper.find(label)).to.have.length(3);
      });
});


describe('<NavBar/>', () => {

  it('should has className Bar', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.contains(<div className="Bar"/>)).to.equal(true);
    });
});
