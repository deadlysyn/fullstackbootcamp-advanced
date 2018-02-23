/* poor man's forEach */

// the stdlib forEach takes an array and:
// - iterates through it
// - returns a callback on each value
// - callback arguments are element, index, entire array
// - always returns undefined

function forEach(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

var test = [1, 2, 3, 4, 5]
forEach(test, function(num, index, array) {
    if (index !== array.length - 1) {
        console.log(num * index)
    } else {
        console.log(num * index + ' Done!')
    }
})

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
var doubleArr = [1,2,3]
function doubleValues(arr) {
    let newArr = []
    arr.forEach(function(item) {
        newArr.push(item * 2)
    })
    return newArr
}
console.log(doubleValues(doubleArr))

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
var evenArr = [1,2,3]
function onlyEvenValues(arr){
    let newArr = []
    arr.forEach(function(item) {
        if (item % 2 === 0) {
            newArr.push(item)
        }
    })
    return newArr
}
console.log(onlyEvenValues(evenArr))

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
var firstLast = ['colt', 'matt', 'tim', 'udemy']
function showFirstAndLast(arr){
    let newArr = []
    arr.forEach(function(item) {
        newArr.push(item[0] + item[item.length - 1])
    })
    return newArr
}
console.log(showFirstAndLast(firstLast))

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
var addKV = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function addKeyAndValue(arr,key,value){
    arr.forEach(function(item) {
        item[key] = value
    })
    return arr
}
console.log(addKeyAndValue(addKV, 'title', 'instructor'))

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let vowels = 'aeiou'
    let countObj = {}
    str.split('').forEach(function(letter) {
        if(vowels.indexOf(letter.toLowerCase()) !== -1) {
            if (letter in countObj) {
                countObj[letter]++
            } else {
                countObj[letter] = 1;
            }
        })
    })
    return countObj
}
console.log(vowelCount('I Am awesome and so are you'))
