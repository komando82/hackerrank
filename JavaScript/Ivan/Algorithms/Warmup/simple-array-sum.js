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

class SimpleArraySum
{
    calculateSum(n, ar) 
    {
        let sum = 0;
        
        for(let element of ar)
        {
            sum += element;
        }

        return sum;
    }
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = new SimpleArraySum();
    process.stdout.write("" + result.calculateSum(n, ar) + "\n");
}

module.exports = SimpleArraySum;
