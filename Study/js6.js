// Sum of even numbers in an array
const sumEvens = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
};

let numbersArray = [1, 2, 3, 4, 5, 6];
console.log("Sum of Evens:", sumEvens(numbersArray));
