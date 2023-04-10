const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numbers) {
  let compute = numbers.length > 0 ? numbers.reduce((total, number) => {return total + number}, 0) : 0
	return compute;
};

const multiply = function(numbers) {
	return numbers.reduce((total, number) => {return total*number}, 1);
};

const power = function(...numbers) {
	return numbers[0]**numbers[1];
};

const factorial = function(number) {
  if (number > 0) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
      fact *= i;
    }
    return fact;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
