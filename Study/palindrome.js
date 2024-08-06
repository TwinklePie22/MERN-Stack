const check_palindrome = (str) => {
    // Remove all non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Initialize pointers for the beginning and end of the string
    let left = 0;
    let right = str.length - 1;
    // Compare characters from both ends towards the center
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }
    return true; // If all characters matched, it's a palindrome
};

// Example usage:
console.log(check_palindrome("radar")); // Output: true
console.log(check_palindrome("level")); // Output: true
console.log(check_palindrome("hello")); // Output: false
console.log(check_palindrome("A man, a plan, a canal, Panama")); // Output: true
