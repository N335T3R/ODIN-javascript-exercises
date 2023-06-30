

const removeFromArray = function(array, ...nums) {
    for (let num of nums) {
        let waste = array.splice(num - 1, 1);
    }
    return array;
} 


removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
