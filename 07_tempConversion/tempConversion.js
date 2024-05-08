const convertToCelsius = function(fahrenheit) {
  let celsiusConversion = (fahrenheit - 32) * (5/9);
  return Math.round(celsiusConversion * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitConversion = (9/5) * celsius + 32;
  return Math.round(fahrenheitConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
