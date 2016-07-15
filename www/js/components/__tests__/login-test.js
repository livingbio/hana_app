jest.unmock('../login');
'use strict';

import React from 'react';
import {Login} from '../login';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Login Component', () => {

    it('render correct components', () => {

        let wrapper = shallow(<Login
            onLoginSubmit={(user, password) => { }}
            status="LOGGING"
        />);

        expect(wrapper.find('[type="submit"]')).to.have.length(1);

        wrapper = shallow(<Login
            onLoginSubmit={(user, password) => { }}
            status="USER_NAME_EMPTY"
        />);

        wrapper = shallow(<Login
            onLoginSubmit={(user, password) => { }}
            status="PASSWORD_EMPTY"
        />);

    });

});