const convertToCelsius = function(temp) {
  temp = (temp -32) * 0.5556;
  let round = temp.toFixed(1);
  let result = parseFloat(round);
  return result;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;
  let round = temp.toFixed(1);
  let result = parseFloat(round);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
