const coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json'
// tie this to form input...
var currency = 'USD'

var btn = document.querySelector('#btn')
var price = document.querySelector('#price')
var time = document.querySelector('#time')

function XHRget(url, callback) {
    let XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            callback(JSON.parse(XHR.responseText))
        }
    }
    XHR.open('GET', url)
    XHR.send()
}

function updatePage(res) {
    price.textContent = res.bpi[currency].rate + ' ' + currency
    time.textContent = 'Price updated @ ' + res.time.updated
}

// manual refresh
btn.addEventListener('click', function() {
    XHRget(coindeskAPI, function(res) {
        updatePage(res)
    })
})

// live refresh
setInterval(function() {
    XHRget(coindeskAPI, function(res) {
        updatePage(res)
    })
}, 10000)

// initial update on page load
XHRget(coindeskAPI, function(res) {
    updatePage(res)
})
