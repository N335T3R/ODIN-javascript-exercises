const add = function(...nums) {
  let sum = 0;

  for (num of nums) {
    sum = sum + num;
  }
	
  return sum;
};

const subtract = function(num1, num2) {
  let sum;

  sum = num1 - num2;

  return sum;
};

const sum = function(array) {
  let sum = 0;

  for (num of array) {
    sum = sum + num;
  }
	
  sum = parseFloat(sum);
  return sum;
};

const multiply = function(...nums) {
  let product = 1;

  for (num of nums) {
    product = product * num;
  }
  
  return product;
};

const power = function(num, pow) {
  let array = [];

  for (let i = 0; i <= pow; i++) {
    array[i] = num * num;
  }

  let sum = 0; 

  for (num of array) {
    sum = sum + num
  }

  return sum;
};

const factorial = function(num) {
  let result = 1; 

  for (let i = num; i >= 1; i--) {
    result = result * i;
  }

  return result;
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
