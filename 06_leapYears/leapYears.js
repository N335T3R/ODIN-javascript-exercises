const leapYears = function(year) {
    let exp = new RegExp (/[0-9]{1,9}/);
    let test = exp.test(year);

    let cen = new RegExp (/0{2}$/)
    let cenTest = cen.test(year)

    if (test == true && cenTest == true) {
        if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else if (test == true && cenTest == false) {
        if (year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    } else if (test == false && cenTest == false) {
        return false;
    }
}

leapYears();

// Do not edit below this line
module.exports = leapYears;
