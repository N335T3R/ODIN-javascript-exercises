

const removeFromArray = function(array, ...nums) {
    for (let num of nums) {
        let isInArray = array.includes(num);

        if (isInArray == false) {
            continue;
        } else if (isInArray == true) {
            let waste = array.splice(array.indexOf(num), 1);
        }
    }
    return array;
} 


removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
