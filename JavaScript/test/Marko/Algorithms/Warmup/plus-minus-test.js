var assert = require('assert');
var myCode = require('../../../../Marko/Algorithms/Warmup/plus-minus.js');

describe('Algorithms', function() {
    describe('Warmup', function() {
        describe('Plus minus', function() {
            it('This array [-4, 3, -9, 0, 4, 1] should return 0.500000, 0.333333, 0.166667', function() {
                assert.equal('0.500000\n0.333333\n0.166667', myCode.plusMinus([-4, 3, -9, 0, 4, 1]));
            });
        });
    });
});
