const fibonacci = function(number) {
    if (number > 0) {
        return calculateFibonacci(number);
    } else {
        return "OOPS";
    }
};

function calculateFibonacci(num) {
    let f = [0, 1];
    for (let n = 2; n <= parseInt(num); n++) {
        f[n] = f[n-1] + f[n-2];
    }
    return f[f.length - 1];
}

// Do not edit below this line
module.exports = fibonacci;
