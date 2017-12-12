let assert = require('assert');
let SolveMeFirst = require('../../../../Ivan/Algorithms/Warmup/solve-me-first.js');
let SimpleArraySum = require('../../../../Ivan/Algorithms/Warmup/simple-array-sum.js');
let CompareTheTriplets = require('../../../../Ivan/Algorithms/Warmup/compare-the-triplets.js');

describe('Algorithms', function() {
    describe('Warmup', function() {
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
            it('x=5 y=1 result() function should return \'5 1\'', function() {
                myObj.x = 5;
                myObj.y = 1;

                assert.equal('5 1', myObj.result());
            });
            it('typeof result() function should return string', function() {
                assert.equal('string', typeof myObj.result());
            });
        });
    });
});

