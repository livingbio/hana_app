jest.unmock('../number_item');
'use strict';

import React from 'react';
import {LineCharts} from '../line_charts.jsx';
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


describe('LineCharts Component', ()=>{

    it('should have data chart', ()=>{

        const wrapper = mount(<LineCharts dataList={data} />);
        // expect(wrapper.find('.DataChart-item')).to.have.length(1);

    });

    it('should have data chart title', ()=>{

        const wrapper = mount(<LineCharts dataList={data} />);
        // expect(wrapper.find('.DataChart-title')).to.have.length(1);

    });

});
