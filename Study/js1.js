// Separate a single array of 10 numbers into two separate arrays (odd and even numbers)
function separateArray(arr) {
    let oddArray = [];
    let evenArray = [];

    arr.forEach(num => {
        if (num % 2 === 0) {
            evenArray.push(num);
        } else {
            oddArray.push(num);
        }
    });

    return { oddArray, evenArray };
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = separateArray(numbers);
console.log("Odd Numbers:", result.oddArray);
console.log("Even Numbers:", result.evenArray);


