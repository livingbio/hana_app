jest.unmock('../navigation');
jest.unmock('../../actions/navigation');
'use strict';

import React from 'react';
import {navigation} from '../navigation';
import * as navigationActions from '../../actions/navigation';
import {expect, assert} from 'chai';

describe('navigation', () => {

    it('should handle navigation correctly', ()=>{

        let state = navigation({}, navigationActions.navigateToFilter());
        assert.isTrue(state.page == "filter");

        state = navigation({}, navigationActions.navigateToTrend());
        assert.isTrue(state.page == "trend");

        state = navigation({}, navigationActions.navigateToLogin());
        assert.isTrue(state.page == "login")

        let original = {}
        let returned = navigation(original, {type:"garbage"});
        assert.isTrue(original === returned);

    });

});
