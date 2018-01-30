let AVeryBigSum = require('../../../../Ivan/Algorithms/Warmup/a-very-big-sum.js');

describe('A Very Big Sum ', function() {
    let myObj = new AVeryBigSum();

    it('[1, 2, 3] array should return \'6\'', function() {
        assert.equal('6', myObj.bigSum(3, [1, 2, 3]));
    });
    it('[1000000001, 1000000002, 1000000003, 1000000004, 1000000005] array should return \'5000000015\'', function() {
        assert.equal('5000000015', myObj.bigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
    });
    it('add(1 + 2) should return 3', function() {
        assert.equal('3', myObj.add(1, 2));
    });
    it('add(-1 + 1) should return 0', function() {
        assert.equal('0', myObj.add(-1, 1));
    });
});