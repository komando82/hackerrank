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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var result = plusMinus(arr);
    process.stdout.write("" + result + "\n");
}

function plusMinus(arr) {
    let positive = 0,
        negative = 0,
        zeros = 0,
        l = arr.length;
    
    for (let i in arr) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zeros++;
        }
    }

    const p = (positive/l).toFixed(6),
          n = (negative/l).toFixed(6),
          z = (zeros/l).toFixed(6);
    
    return [p, n, z].join('\n');
}

module.exports = {
    plusMinus
}