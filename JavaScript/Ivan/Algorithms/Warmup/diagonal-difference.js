process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

class DiagonalDifference
{
    sumAcrossDiagonals(arr) {
        let res = (this.sumPrimaryDiagonal(arr) - this.sumSecondaryDiagonal(arr));
        return res < 0 ? -(res) : res; 
    }

    sumPrimaryDiagonal(arr) {
        let sum = 0;
        let len = arr.length;

        for(let i=0; i<len; i++) {
            sum += arr[i][i];
        }

        return sum;
    }

    sumSecondaryDiagonal(arr) {
        let sum = 0;
        let len = arr.length;

        for(let i=0; i<len; i++) {
            sum += arr[i][len-i-1];
        }

        return sum;
    }
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var result = new DiagonalDifference();

    process.stdout.write("" + result.sumAcrossDiagonals(a) + "\n");
}

module.exports = DiagonalDifference;
