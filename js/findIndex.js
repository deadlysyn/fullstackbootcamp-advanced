/* implement findIndex young grasshoppa */

function findIndex(arr, callback) {
    for (var i=0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i
        }
    }
    return -1
}

var test = [1, 2, 3, 4, 5]

var result = findIndex(test, function(num, index, array) {
    return num === 3
})

// should print 2
console.log(result)

result = findIndex(test, function(num, index, array) {
    return num === 10
})

// should print -1
console.log(result)
