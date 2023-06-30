let string = "hello";

const reverseString = function(string) {
    let arrayString = Array.from(string);
    let revArray = arrayString.reverse();
    let newString = revArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
