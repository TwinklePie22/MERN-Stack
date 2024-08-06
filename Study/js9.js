// Check if a location is valid
function checkLocation(location) {
    return new Promise((resolve, reject) => {
        if (location === 'Paris') {
            resolve("Let's take a trip to Paris");
        } else {
            reject("Invalid Location");
        }
    });
}

// Usage example:
checkLocation('Paris')
    .then(message => console.log(message))
    .catch(error => console.log(error));

checkLocation('New York')
    .then(message => console.log(message))
    .catch(error => console.log(error));
