// Check if a string is a palindrome
const check_palindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

let testString = "civic";
console.log("Is palindrome:", check_palindrome(testString));
