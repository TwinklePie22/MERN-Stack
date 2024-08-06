// Add elements to the existing array at a specific position without using splice
// function addElementAtPosition(arr, element, position) {
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === position) {
//             newArray.push(element);
//         }
//         newArray.push(arr[i]);
//     }

//     if (position >= arr.length) {
//         newArray.push(element);
//     }

//     return newArray;
// }

// let array = [1, 2, 3, 4, 5];
// let elementToAdd = 99;
// let position = 2;
// let updatedArray = addElementAtPosition(array, elementToAdd, position);
// console.log(updatedArray);