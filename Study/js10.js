// Book a Hotel Only After Booking a Flight
function bookFlight() {
    return new Promise((resolve, reject) => {
        // Simulate flight booking
        setTimeout(() => {
            console.log('Flight booked');
            resolve('Flight booking successful');
            // Uncomment the line below to simulate a flight booking failure
            // reject('Flight booking failed');
        }, 2000);
    });
}

function bookHotel() {
    return new Promise((resolve, reject) => {
        // Simulate hotel booking
        setTimeout(() => {
            console.log('Hotel booked');
            resolve('Hotel booking successful');
        }, 2000);
    });
}

// Usage example:
bookFlight()
    .then(response => {
        console.log(response);
        return bookHotel();
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
