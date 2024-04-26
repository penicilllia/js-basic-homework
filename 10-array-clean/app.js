function arrayClean(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (!fun(arr[i])) {
            arr.splice(i, 1);
            i--;
        } 
    }

    return arr;
}

const biggerThan5 = num => num > 5;

const evenElements = num => num % 2 === 0;

const withoutString = num => typeof(num) !== 'string';

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [1, 2, 'three', 4, '5', '6, 7, 8', 9, 10];

console.log(arrayClean(array1, biggerThan5));
console.log(arrayClean(array2, evenElements));
console.log(arrayClean(array3, withoutString));
