let SolveMeFirst = require('../../../../Ivan/Algorithms/Warmup/solve-me-first.js');

describe('Solve Me First', function() {
    let myObj = new SolveMeFirst();

    it('(3+5) should return 8', function() {
        assert.equal(8, myObj.result(3, 5));
    });
    it('(3-5) should return -2', function() {
        assert.equal(-2, myObj.result(3, -5));
    });
    it('typeof (3-5) should return number', function() {
        assert.equal('number', typeof myObj.result(3, -5));
    });
    it('(Ivan+82) should return Ivan82', function() {
        assert.equal('Ivan82', myObj.result('Ivan', 82));
    });
    it('typeof (Ivan+82) should return string', function() {
        assert.equal('string', typeof myObj.result('Ivan', 82));
    });
});