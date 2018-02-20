const API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

var quote = document.querySelector('#quote')

// XHR
var btnXHR = document.querySelector('#btnXHR')

btnXHR.addEventListener('click', function() {
    var XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            quote.innerHTML = JSON.parse(XHR.responseText)[0]
        }
    }
    XHR.open('GET', API)
    XHR.send()
})

// Fetch
var btnFetch = document.querySelector('#btnFetch')

btnFetch.addEventListener('click', function() {
    fetch(API)
        .then(function(res) {
            res.json().then(function(data) {
                quote.innerHTML = data[0]
            })
        })
        .catch(function(err) {
            console.log(err)
        })
})

// jQuery
$('#btnJquery').click(function() {
    $.getJSON(API)
        .done(function(data) {
            $('#quote').text(data[0])
        })
        .fail(function(err) {
            console.log(err)
        })
})

// Axios
var btnAxios = document.querySelector('#btnAxios')

btnAxios.addEventListener('click', function() {
    axios.get(API)
        .then(function(res) {
            quote.innerHTML = res.data[0]
        })
        .catch(function(err) {
            console.log(err)
        })
})
