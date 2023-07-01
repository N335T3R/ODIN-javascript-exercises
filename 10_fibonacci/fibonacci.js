const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    } else if (typeof index !== "number") {
        index = parseInt(index);

        let num1 = 1;
        let num2 = 1;

        let fib = [1, 1];
        let a = 2;
        sum = num1 + num2;
        fib[a] = sum;
        a++;

        for (let i = 0; i < 25; i++) {
            num2 = sum;
            sum = num1 + num2;
            fib[a] = sum;
            a++;

            num1 = sum;
            sum = num1 + num2;
            fib[a] = sum;
            a++;
        }

        return fib[index - 1];
    } else {

        let num1 = 1;
        let num2 = 1;

        let fib = [1, 1];
        let a = 2;
        sum = num1 + num2;
        fib[a] = sum;
        a++;

        for (let i = 0; i < 25; i++) {
            num2 = sum;
            sum = num1 + num2;
            fib[a] = sum;
            a++;

            num1 = sum;
            sum = num1 + num2;
            fib[a] = sum;
            a++;
        }

        return fib[index - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
