let PlusMinus = require('../../../../Ivan/Algorithms/Warmup/plus-minus.js');

describe('Simple Array Sum', function() {
    let myObj = new PlusMinus();

    myObj.parseArr([-4, 3, -9, 0, 4, 1]);

    it('[-4, 3, -9, 0, 4, 1] parseArr(array) length should be 6', function() {
        assert.equal(6, myObj.n);
    });
    it('[-4, 3, -9, 0, 4, 1] parseArr(array) - number of positives should be 3', function() {
        assert.equal(3, myObj.positive);
    });
    it('[-4, 3, -9, 0, 4, 1] parseArr(array) - number of negatives should be 2', function() {
        assert.equal(2, myObj.negative);
    });
    it('[-4, 3, -9, 0, 4, 1] parseArr(array) - number of zeroes should be 1', function() {
        assert.equal(1, myObj.zero);
    });

    let myObj2 = new PlusMinus();

    it('[-4, 3, -9, 0, 4, 1] buildResult(array) should return "0.500000/n0.333333/n0.166667/n"', function() {
        assert.equal("0.500000\n0.333333\n0.166667\n", myObj2.buildResult([-4, 3, -9, 0, 4, 1]));
    });

});