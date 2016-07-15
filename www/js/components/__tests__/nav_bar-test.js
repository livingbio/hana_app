jest.unmock('../nav_bar.jsx');
'use strict';

import React from 'react';
import {NavBar} from '../nav_bar.jsx';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('NavBar Component', () => {

    it('should has className Bar', () => {

          const wrapper = shallow(<NavBar />);
          expect(wrapper.find('.Bar')).to.have.length(1);

      });

});
