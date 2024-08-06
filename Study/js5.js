// Find the average of an array of numbers
const average = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
};

let numbers = [1, 2, 3, 4, 5];
console.log("Average:", average(numbers));
