// Filter strings by length
const filterByLength = (strings) => {
    let length = parseInt(prompt("Enter the Length of the String:"), 10);
    return strings.filter(str => str.length === length);
};

let stringArray = ["apple", "banana", "cherry", "date"];
console.log("Filtered Strings:", filterByLength(stringArray));
