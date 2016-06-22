jest.unmock('../components/drawer');
'use strict';

import React from 'react';
import Drawer from '../components/drawer';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Drawer Component', () => {

    it('should have idName sideBar', ()=>{

        const wrapper = shallow(<Drawer profileID="GliaCloud"/>);
        expect(wrapper.find('#sideBar')).to.have.length(1);

    });

});
