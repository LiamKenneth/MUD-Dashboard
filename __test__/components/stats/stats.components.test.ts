import * as React from 'react'
import 'jest-enzyme';
import Stats from '../../../src/components/stats/stats.component';

describe('<Stats />', () => {

    test("Return stat showing if it's up or down from last time", () => {

 
        const props = {
            message: 'http://www.example.com/pusheen.gif',
            stat : 5,
            prevStat: 0

          }        
        const wrapper = shallow((<Stats {...props}/>));

    expect(wrapper.html()).to.contain("new players this month: 45( +15) 30");
    });

});
