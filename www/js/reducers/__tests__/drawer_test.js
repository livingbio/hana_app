jest.unmock('../drawer');
jest.unmock('../../actions/drawer');
'use strict';

import React from 'react';
import {drawer} from '../drawer';
import * as drawerActions  from '../../actions/drawer';
import {expect, assert} from 'chai';

describe('drawer', () => {

    it('should open close drawer correctly', ()=>{
        let state = drawer({}, drawerActions.setupDrawer({open:true}));
        assert.isTrue(state.open);

        state = drawer({open:false}, drawerActions.toggleDrawer());
        assert.isTrue(state.open);

        state = drawer({open:false}, {type:'NOT_OF_A_TYPE"'});
        assert.isFalse(state.open);
    });


});
