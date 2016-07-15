jest.unmock('../authentication');
jest.unmock('../../actions/index');
'use strict';

import React from 'react';
import {authentication} from '../authentication';
import {loginIntegrityCheck, startLogin, loginSuccess, loginFail} from '../../actions/index';
import {expect, assert} from 'chai';

describe('authentication', () => {

    it('must compare user/password correctly', ()=>{

        let next_state = authentication({authorized:true}, loginIntegrityCheck("", ""));
        assert.isFalse(next_state.authorized, 'must be false');

        next_state = authentication({authorized:true}, loginIntegrityCheck("name", ""));
        assert.isFalse(next_state.authorized, 'must be false');

    });

    it('must start loggin correctly', ()=>{

        let next_state = authentication({}, startLogin());
        assert.isTrue(next_state.status == "LOGGING", 'to enable animation');

    });

    it('must log out correct ', ()=>{

        let next_state = authentication({authorized: true}, {
           type: "LOGOUT"
        });

        assert.isFalse(next_state.authorized, 'must be false');

    });

    it('must login after pass correct name and password', ()=>{

        let next_state = authentication(
            {authorized: false},
            loginSuccess({user:"a", password:"b"})
        );

        assert.isTrue(next_state.authorized, 'indicate successed');

    });

    it('must preserve state with unknown action', ()=>{

        let original_state = {};

        let next_state = authentication(
            original_state,
            {
                type: "I_DON_KNOW"
            }
        );

        assert.isTrue(next_state === original_state, 'preserve state');

    });

    it('must show error message with fail login', ()=>{

        let state = authentication(
            {authorized: false},
            loginFail()
        );
        assert.isFalse(state.authorized);
    })

});
