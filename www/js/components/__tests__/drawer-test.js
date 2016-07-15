jest.unmock('../drawer');
'use strict';

import React from 'react';
import {Drawer} from '../drawer';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Drawer Component', () => {

    it('should have drawer ', ()=>{

        const wrapper = shallow(<Drawer profileID="GliaCloud"/>);
        expect(wrapper.find('.drawer')).to.have.length(1);

    });

});
