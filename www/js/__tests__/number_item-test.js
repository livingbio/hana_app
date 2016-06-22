jest.unmock('../components/number_item');
'use strict';

import React from 'react';
import Number_Item from '../components/number_item';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';


var data = [
    {
        'YYMM': 201512,
        'detail':
        {
            'SourceCost': {
                'number': 456,
                'label': 'SourceCost',
                'kind': 'money',
                'arrow': 'up',
            },
            'Amt': {
                'number': 400,
                'label': 'Amt',
                'kind': 'money',
                'arrow': 'down',
            },
            'GrossMargin': {
                'number': 400,
                'label': 'GrossMargin',
                'kind': 'money',
                'arrow': 'up',
            },
            'GrossMarginRate': {
                'number': 500,
                'label': 'GrossMarginRate',
                'kind': 'money',
                'arrow': 'up',
            },
            'Sale': {
                'number': 500,
                'label': 'Sale',
                'kind': 'money',
                'arrow': 'down',
            },
            'SBG': {
                'number': 550,
                'label': 'SBG',
                'kind': 'money',
                'arrow': 'down',
            }
        }
    }
];


describe('NumberItem Component', ()=>{

    it('should have 6 data blocks', ()=>{

        const wrapper = mount(<Number_Item dataList={data} />);
        expect(wrapper.find('.DataBlock')).to.have.length(6);

    });

    it('should have shown 成本', ()=>{

        const wrapper = mount(<Number_Item dataList={data} />);
        expect(wrapper.text()).to.contain("成本");

    });

    it('should have shown 收入', ()=>{

        const wrapper = mount(<Number_Item dataList={data} />);
        expect(wrapper.text()).to.contain("收入");

    });

    it('should have shown 毛利', ()=>{

        const wrapper = mount(<Number_Item dataList={data} />);
        expect(wrapper.text()).to.contain("毛利");

    });

    it('should have shown 毛利率', ()=>{

        const wrapper = mount(<Number_Item dataList={data} />);
        expect(wrapper.text()).to.contain("毛利率");

    });

});
