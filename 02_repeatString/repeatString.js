

const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let NewString = '';

        for (i = 0; i < num; i++) {
        NewString = NewString + string;
        }
        
        return NewString;
    }
}

repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;
