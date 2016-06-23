jest.unmock('../components/filter');
'use strict';

import React from 'react';
import {Filter} from '../components/filter.jsx';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Filter Component', () => {

    it('should render three form labels', ()=>{

        const wrapper = shallow(<Filter years={[1,2,3]} monthes={[1,2,3]} sbgs={['tim']}/>);

        expect(wrapper.find('label')).to.have.length(3);

      });

});
