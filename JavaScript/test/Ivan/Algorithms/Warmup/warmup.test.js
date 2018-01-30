let fs = require('fs');

let assert = require('assert');

describe('Algorithms', function() {
    describe('Warmup', function() {

        eval(fs.readFileSync('./test/Ivan/Algorithms/Warmup/_solve_me_first.js', (err, data) => {
            if (err) throw err;
        }).toString());

        eval(fs.readFileSync('./test/Ivan/Algorithms/Warmup/_simple_array_sum.js', (err, data) => {
            if (err) throw err;
        }).toString());

        eval(fs.readFileSync('./test/Ivan/Algorithms/Warmup/_compare_the_triplets.js', (err, data) => {
            if (err) throw err;
        }).toString());

        eval(fs.readFileSync('./test/Ivan/Algorithms/Warmup/_a_very_big_sum.js', (err, data) => {
            if (err) throw err;
        }).toString());

        eval(fs.readFileSync('./test/Ivan/Algorithms/Warmup/_diagonal_difference.js', (err, data) => {
            if (err) throw err;
        }).toString());

    });
});

