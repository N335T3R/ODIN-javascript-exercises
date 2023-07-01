const palindromes = function(string) {
    let uReg = new RegExp (/[A-Z]{1,}/g)
    let uTest = uReg.test(string);
    let lowerString;

    loop1: if (uTest == true) {
        lowerString = string.toLowerCase();
    } else {
        break loop1;
    }

    const rmPunct = function(string) {
        let sReg = new RegExp (/\s{1,}/g);
        let pReg = new RegExp (/\p{P}{1,}/gu);
        let cReg = new RegExp (/[\$\^\*\+\(\)@#%&_-]{1,}/g);

        let fixdString = string.replace(sReg, "");
        let nfString = fixdString.replace(pReg, "");
        let doneString = nfString.replace(cReg, "");
        return doneString;
    }

    let newString;
    loop2: if (uTest == true) {
        newString = rmPunct(lowerString);
    } else {
        newString = rmPunct(string);
    }
    
    
    const reverseString = function(string) {
        let arrayString = Array.from(string);
        let revArray = arrayString.reverse();
        let outString = revArray.join("");
        return outString;
    }

    let revString = reverseString(newString);

    if (revString == newString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
