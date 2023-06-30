

const removeFromArray = function(array, num) {
    let waste = array.splice(num - 1, 1);
    return array;
}

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
