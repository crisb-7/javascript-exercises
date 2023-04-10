const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        const currentYear = (new Date()).getFullYear();
        const ageA = "yearOfDeath" in a ? 
                a.yearOfDeath - a.yearOfBirth : 
                currentYear - a.yearOfBirth;
        const ageB = "yearOfDeath" in b ?
                    b.yearOfDeath - b.yearOfBirth :
                    currentYear - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
