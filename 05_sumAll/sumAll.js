const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    } else if (typeof firstNum === "number" && typeof secondNum === "number") {
        let sortNumbers = [firstNum, secondNum];
        sortNumbers = sortNumbers.sort();
        let start = sortNumbers[0];
        let end = sortNumbers[1];
        sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
