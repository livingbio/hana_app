jest.unmock('../components/filter');
'use strict';

import React from 'react';
import Filter from '../components/filter';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Filter Component', () => {

    it('should render three form labels', ()=>{

        const wrapper = shallow(<Filter />);
        expect(wrapper.find('label')).to.have.length(3);

      });

});
