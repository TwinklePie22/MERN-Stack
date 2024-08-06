// Find the most frequent item in an array
function findMostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentItem;

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    });

    return { item: mostFrequentItem, count: maxCount };
}

let arr1 = [1, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 'a'];
let mostFrequent = findMostFrequent(arr1);
console.log(`${mostFrequent.item} (${mostFrequent.count} times)`);
