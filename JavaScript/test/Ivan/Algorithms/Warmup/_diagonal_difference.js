let DiagonalDifference = require('../../../../Ivan/Algorithms/Warmup/diagonal-difference.js');

describe('A Very Big Sum ', function() {
    let myObj = new DiagonalDifference();

    it('sumAcrossDiagonals([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) should return \'15\'', function() {
        assert.equal('15', myObj.sumAcrossDiagonals([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
    });
    it('sumAcrossDiagonals([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) should return greater or equal to \'0\'', function() {
        assert.ok(myObj.sumAcrossDiagonals([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) >= 0);
    });
    it('sumPrimaryDiagonal([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) - (11 + 5 + -12) should return \'4\'', function() {
        assert.equal('4', myObj.sumPrimaryDiagonal([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
    });
    it('sumSecondaryDiagonal([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) - (4 + 5 + 10) should return \'19\'', function() {
        assert.equal('19', myObj.sumSecondaryDiagonal([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
    });
});