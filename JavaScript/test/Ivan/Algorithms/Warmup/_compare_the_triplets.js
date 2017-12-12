let CompareTheTriplets = require('../../../../Ivan/Algorithms/Warmup/compare-the-triplets.js');

describe('Compare The Triplets ', function() {
    let myObj = new CompareTheTriplets();

    it('[5, 6, 7, 3, 6, 10] array should return \'1 1\'', function() {
        assert.equal('1 1', myObj.compare(5, 6, 7, 3, 6, 10));
    });
    it('[5, 6, 7, 5, 6, 7] array should return \'0 0\'', function() {
        assert.equal('0 0', myObj.compare(5, 6, 7, 5, 6, 7));
    });
    it('typeof [5, 6, 7, 8, 9, 10] array should return string', function() {
        assert.equal('string', typeof myObj.compare(5, 6, 7, 8, 9, 10));
    });
    it('x=1 y=2 compareTwo(3, 3) function, result should be x=1 y=2', function() {
        myObj.x = 1;
        myObj.y = 2;

        myObj.compareTwo(3, 3);

        assert.equal(1, myObj.x);
        assert.equal(2, myObj.y);
    });
    it('x=1 y=2 compareTwo(3, 4) function, result should be x=1 y=3', function() {
        myObj.x = 1;
        myObj.y = 2;

        myObj.compareTwo(3, 4);

        assert.equal(1, myObj.x);
        assert.equal(2+1, myObj.y);
    });
    it('x=1 y=2 compareTwo(4, 3) function, result should be x=2 y=2', function() {
        myObj.x = 1;
        myObj.y = 2;

        myObj.compareTwo(4, 3);

        assert.equal(1+1, myObj.x);
        assert.equal(2, myObj.y);
    });
    it('x=5 y=1 result() function should return \'5 1\'', function() {
        myObj.x = 5;
        myObj.y = 1;

        assert.equal('5 1', myObj.result());
    });
    it('typeof result() function should return string', function() {
        assert.equal('string', typeof myObj.result());
    });
});