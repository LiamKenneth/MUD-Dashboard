import React from 'react';
import { shallow, mount, render } from 'enzyme';
const Stats = require('../../../src/components/stats/stats.component');


test("Return stat showing if it's up or down from last time", () => {

 
   expect(shallow(<Stats 
                message="new players this month:"
                stat={this.state.newPlayers.month.now}
                prevStat={this.state.newPlayers.month.before} />).contains(<div>new players this month: <span> 45( +15) 30</span></div>)).toBe(true);
});

