jest.unmock('../components/login');
'use strict';

import React from 'react';
import Login from '../components/login';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Login Component', () => {

    it('render correct components', () => {

        const wrapper = shallow(<Login/>);
        expect(wrapper.find('[type="submit"]')).to.have.length(1);

    });

});