
function countDown(seconds) {
    var id = setInterval(function() {
        if (seconds === 0) {
            console.log('Ring Ring Ring!!!')
            clearInterval(id)
        } else {
            console.log(seconds + ' seconds remaining...')
            seconds--
        }
    }, 1000)
}

countDown(3)
