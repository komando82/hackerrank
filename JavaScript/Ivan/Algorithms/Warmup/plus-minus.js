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

class PlusMinus
{
    constructor() 
    {
        this.positive = 0;
        this.negative = 0;
        this.zero = 0;

        this.n = 1;
    }

    parseArr(arr) 
    {
        this.n = arr.length;

        for(let i=0; i<this.n; i++) 
        {
            if (arr[i] > 0) 
            {
                this.positive++;
            }
            else if (arr[i] < 0)
            {
                this.negative++;
            }
            else 
            {
                this.zero++;
            }
        }
    }

    buildResult(arr)
    {
        this.parseArr(arr);
        
        return (
            "" + (this.positive/this.n).toFixed(6) + "\n" +
            "" + (this.negative/this.n).toFixed(6) + "\n" + 
            "" + (this.zero/this.n).toFixed(6) + "\n"
        );
    }

    printResult(arr)
    {
        process.stdout.write(this.buildResult(arr));
    }

}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var result = new PlusMinus();
    result.printResult(arr);
}

module.exports = PlusMinus;
