const Stats = require('../../../src/components/stats/stats.component.tsx');


test("Return stat showing if it's up or down from last time", () => {

  expect(Stats.showStatDifference(5, 1)).toBe("(0)");

});
