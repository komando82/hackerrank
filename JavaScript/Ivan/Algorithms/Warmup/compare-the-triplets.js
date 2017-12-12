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

class CompareTheTriplets 
{
    constructor() 
    {
        this.x = 0;
        this.y = 0;
    }

    compare(a0, a1, a2, b0, b1, b2)
    {
        this.x = 0;
        this.y = 0;

        let len = arguments.length;

        for (let i=0; i<len; i++)
        {
            this.compareTwo(arguments[i], arguments[i+3]);
        }

        return this.result();
    }

    compareTwo(a, b)
    {
        if (a > b)
        {
            this.x++;
        }

        if (a < b)
        {
            this.y++;
        }
    }

    result()
    {
        return this.x + ' ' + this.y;
    }

}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = new CompareTheTriplets();
    console.log(result.compare(a0, a1, a2, b0, b1, b2));
    
}

module.exports = CompareTheTriplets;
