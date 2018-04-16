/* poor man's map */

// stdlib's map takes an array and:
// - creates a new array
// - iterates through given array
// - runs callback on each value
// - callback arguments are element, index, entire array
// - pushes result of callback onto new array
// - returns new array

function myMap(arr, callback) {
    var newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

var test = [2, 4, 6, 8, 10]
myMap(test, function(num, index, array) {
    return 2 * num
})

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
    var newArr = myMap(arr, function(num, index, array) {
        return 2 * num
    })
    return newArr
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    var newArr = myMap(arr, function(num, index, array) {
        return num * index
    })
    return newArr
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    var newArr = myMap(arr, function(num, index, array) {
        return arr[index][key]
    })
    return newArr
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return myMap(arr, function(num, index, array) {
        let fullName = arr[index].first + ' ' + arr[index].last
        return fullName
    })
}
