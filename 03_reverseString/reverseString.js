const reverseString = function(string) {
    let stringLength = string.length;
    let reversedString = "";
    for (let i = 0; i < stringLength; i++) {
        reversedString += string.at(stringLength - 1 - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
