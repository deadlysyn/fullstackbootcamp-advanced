/* poor man's forEach */

function forEach(arr, callback) {
    for (var i=0; i < arr.length; i++) {
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
