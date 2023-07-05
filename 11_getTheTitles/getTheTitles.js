const getTheTitles = function(array) {
    let titles = array.map((value) => {
        for(let property in value) {
            return(`${value[property]}`);
        }
    });

    return titles;
};


// Do not edit below this line
module.exports = getTheTitles;
