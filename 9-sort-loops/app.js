const arr1 = [1, 3, 6, 2, 5, 9, 4, 5];
const arr2 = [1, -3, 3, 2];
const arr3 = [1, 1, 0, 3, 4, 1];

function bubbleSort(arr, ascending = true) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if ((ascending && arr[j] > arr [j + 1]) || (!ascending && arr[j] < arr [j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr1, false));

console.log(bubbleSort(arr2));
console.log(bubbleSort(arr2, false));

console.log(bubbleSort(arr3));
console.log(bubbleSort(arr3, false));

console.log(bubbleSort([]));
