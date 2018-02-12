const API = 'https://randomuser.me/api'

var avatar = document.querySelector('#avatar')
var fullname = document.querySelector('#fullname')
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var city = document.querySelector('#city')
var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    fetch(API)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(function (err) {
            console.log(err)
        })
})

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status)
    }
    return res
}

function parseJSON(res) {
    return res.json().then(function(data) {
        return data.results[0]
    })
}

function updateProfile(data) {
    avatar.src = data.picture.medium
    fullname.innerText = data.name.first + ' ' + data.name.last
    username.innerText = data.login.username
    email.innerText = data.email
    city.innerText = data.location.city
}
