// Add elements to the existing array at a specific position without using splice
let arr = [1, 2, 3, 4, 5];
let elementToAdd = 10;
let positionToAdd = 2;

if (positionToAdd >= 0 && positionToAdd <= arr.length) {
  for (let i = arr.length; i > positionToAdd; i--) {
    arr[i] = arr[i - 1];
  }
  arr[positionToAdd] = elementToAdd;
  console.log("Updated array:", arr);
} else {
  console.log("Invalid position!");
}
