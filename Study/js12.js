// Perform arithmetic operations asynchronously
function add(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

function subtract(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a - b);
        }, 1000);
    });
}

function multiply(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a * b);
        }, 1000);
    });
}

function divide(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a / b);
        }, 1000);
    });
}

async function performOperations() {
    try {
        let sum = await add(10, 5);
        console.log(`Sum: ${sum}`);

        let difference = await subtract(10, 5);
        console.log(`Difference: ${difference}`);

        let product = await multiply(10, 5);
        console.log(`Product: ${product}`);

        let quotient = await divide(10, 5);
        console.log(`Quotient: ${quotient}`);
    } catch (error) {
        console.error(error);
    }
}

// Usage example:
performOperations();
