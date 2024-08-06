// Find leap years between two years
function findLeapYears(startYear, endYear) {
    let leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

let startYear = 2000;
let endYear = 2024;
let leapYears = findLeapYears(startYear, endYear);
console.log("Leap Years:", leapYears);
