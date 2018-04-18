/* poor man's every */

// stdlib's every takes an array and:
// - iterates through given array
// - runs callback on each value
// - if callback returns false for any value: return false
// - else return true

function myEvery(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true
}

var test = [3, 6, 9]
myEvery(test, function(num, index, array) {
    return num % 3
})

