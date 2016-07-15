jest.unmock('../persist');
jest.unmock('../../actions/persist_actions');
'use strict';

import React from 'react';
import {persist} from '../persist';
import {saveToStore} from '../../actions/persist_actions';
import {expect, assert} from 'chai';

describe('persist store', () => {

    it('should handle persist correctly', ()=>{

        let state = persist({}, saveToStore({key: 'key', value:'value'}));
        assert.isTrue(state.key == "value");

        let original = {};
        let returned = persist(original, {type:"garbage"});
        assert.isTrue(original === returned);

    });

});
