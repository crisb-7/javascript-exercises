const removeFromArray = function(array, ...restArgs) {
    let newArray = [];
    for (let i=0; i<array.length; i++) {
        let item = array[i];
        let condition = restArgs.includes(item);
        if (condition) {
            continue;
        } else {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
