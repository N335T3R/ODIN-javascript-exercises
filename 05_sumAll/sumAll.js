const sumAll = function(num1, num2) {
    let sum = num1;

    for (let i = num1 + 1; i <= num2; i++) {
        sum = sum + i;
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
