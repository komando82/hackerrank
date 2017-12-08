var assert = require('assert');
var myCode = require('../../../Algorithms/Warmup/solve-me-first.js');

describe('Algorithms', function() {
    describe('Warmup', function() {
        describe('Solve Me First', function() {
            it('(3+5) should return 8', function() {
                assert.equal(8, myCode.solveMeFirst(3, 5));
            });
            it('(3-5) should return -2', function() {
                assert.equal(-2, myCode.solveMeFirst(3, -5));
            });
            it('typeof (3-5) should return number', function() {
                assert.equal('number', typeof myCode.solveMeFirst(3, -5));
            });
            it('(Ivan+82) should return Ivan82', function() {
                assert.equal('Ivan82', myCode.solveMeFirst('Ivan', 82));
            });
            it('typeof (Ivan+82) should return string', function() {
                assert.equal('string', typeof myCode.solveMeFirst('Ivan', 82));
            });
        });
    });
});

