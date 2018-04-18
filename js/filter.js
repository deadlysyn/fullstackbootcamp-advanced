/* poor man's filter */

// stdlib's filter takes an array and:
// - creates a new array
// - iterates through given array
// - runs callback on each value
// - if callback returns true: add value to new array
// - if callback returns false: skip value in new array
// - returns new array

function myFilter(arr, callback) {
    var newArr = []
    for (let i=0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

var test = [2, 4, 6, 8, 10]
myFilter(test, function(num, index, array) {
    return num % 3
})

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(obj, index, array) {
        return obj.hasOwnProperty(key);
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    var newArr = arr.filter(function(num, index, array) {
        if (num === searchValue) {
            return num;
        }
    });
    return newArr[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    var newArr = arr.filter(function(obj, index, array) {
        if (obj[key] && obj[key] === searchValue) {
            return obj;
        }
    });
    return newArr[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = "aeiou";

    var newArr = str.toLowerCase().split('').filter(function (char, index, array) {
        return !vowels.includes(char);
    });

    return newArr.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(function(num, index, array) {
        return num % 2 !== 0;
    }).map(x => x * 2);
}
