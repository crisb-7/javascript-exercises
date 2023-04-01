const convertToCelsius = function(fahrenheit) {
  let celsius;
  celsius = (fahrenheit - 32)*(5/9);
  // celsius = Math.round(celsius*10)/10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = celsius*(5/9) + 32;
  // fahrenheit = Math.round(fahrenheit*10)/10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
