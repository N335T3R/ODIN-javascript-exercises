const sumAll = function(num1, num2) {
    let sum = num1;

    if (typeof num1 !== "number"  || typeof num2 !== "number") {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 < num2) {
        for (let i = num1 + 1; i <= num2; i++) {
            sum = sum + i;
        }
    } else if (num1 > num2) {
        for (let i = num1 - 1; i >= num2; i--) {
            sum = sum + i;
        }
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
