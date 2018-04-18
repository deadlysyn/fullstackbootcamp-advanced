/* poor man's some */

// stdlib's some takes an array and:
// - iterates through given array
// - runs callback on each value
// - if callback returns true for any value: return true
// - else return false

function mySome(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        }
    }
    return false
}

var test = [2, 4, 6, 8, 10]
mySome(test, function(num, index, array) {
    return num % 3
})

