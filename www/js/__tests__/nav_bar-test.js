jest.unmock('../components/nav_bar');
'use strict';

import React from 'react';
import {NavBar} from '../components/nav_bar.jsx';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('NavBar Component', () => {

    it('should has className Bar', () => {

          const wrapper = shallow(<NavBar />);
          expect(wrapper.find('.Bar')).to.have.length(1);

      });

});
