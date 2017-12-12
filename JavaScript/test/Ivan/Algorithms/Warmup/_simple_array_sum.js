let SimpleArraySum = require('../../../../Ivan/Algorithms/Warmup/simple-array-sum.js');

describe('Simple Array Sum', function() {
    let myObj = new SimpleArraySum();

    it('[1, 2, 3, 4, 10, 11] array sum should return 31', function() {
        assert.equal(31, myObj.calculateSum(6, [1, 2, 3, 4, 10, 11]));
    });
    it('[-1, -2, -3, 4] array sum should return -2', function() {
        assert.equal(-2, myObj.calculateSum(4, [-1, -2, -3, 4]));
    });
    it('typeof [-1, -2, -3, -4] array sum should return number', function() {
        assert.equal('number', typeof myObj.calculateSum(3, [-1, -2, -3, -4]));
    });
});