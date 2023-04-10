const getTheTitles = function(array) {
    let titles = [];
    let lol = array.filter((object) => {
        titles.push(object.title)});
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
