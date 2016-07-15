jest.unmock('../filter');
jest.unmock('../../actions/filter_actions');
'use strict';

import React from 'react';
import {filter} from '../filter';
import * as filterActions from '../../actions/filter_actions';
import {expect, assert} from 'chai';

describe('filter', () => {

    it('should handle filter correctly', ()=>{

        let state = filter({}, filterActions.setYears(
            2015
        ));
        assert.isTrue(state.years == 2015)

    });

});
