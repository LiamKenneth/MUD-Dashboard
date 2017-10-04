import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Stats from "../../../src/components/stats/stats.component";

describe("Stat component", () => {

    it('should display text, current value, before value and show a POSITIVE difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="45"
            prevStat="30" />);

        expect(wrapper.html()).to.equal('<div class="stats col">new players this month:<span>45<sup>(+15)</sup> 30</span></div>');
    });

    it('should display text, current value, before value and show a NEGATIVE difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="23"
            prevStat="100" />);

        expect(wrapper.html()).to.equal('<div class="stats col">new players this month:<span>23<sup>(-77)</sup> 100</span></div>');
    });

    it('should display text, current value, before value and show a NO difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="23"
            prevStat="23" />);

        expect(wrapper.html()).to.equal('<div class="stats col">new players this month:<span>23<sup>(0)</sup> 23</span></div>');
    });
    
    it('should display text and a value', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="23"
            />);

        expect(wrapper.html()).to.equal('<div class="stats col">new players this month:<span>23</span></div>');
    });

    it('should return no difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="23"
            prevStat="23"
            />);

        expect(wrapper.instance().showStatDifference(23, 23)).to.equal('(0)');
    });

    it('should return positive difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="20"
            prevStat="10"
            />);

        expect(wrapper.instance().showStatDifference(20, 10)).to.equal('(+10)');
    });

    it('should return negative difference', function () {
        const wrapper = shallow(<Stats
            message="new players this month:"
            stat="10"
            prevStat="20"
            />);

        expect(wrapper.instance().showStatDifference(10, 20)).to.equal('(-10)');
    });

 

});
