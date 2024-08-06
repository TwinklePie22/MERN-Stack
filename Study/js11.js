// Check if a number is greater than 20
function numTest(number) {
    return new Promise((resolve, reject) => {
        if (number > 20) {
            resolve('Number is greater than 20');
        } else {
            reject('Number is less than or equal to 20');
        }
    });
}

// Usage example:
numTest(25)
    .then(response => console.log(response))
    .catch(error => console.log(error));

numTest(15)
    .then(response => console.log(response))
    .catch(error => console.log(error));
