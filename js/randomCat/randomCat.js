const API = 'https://random.cat/meow'

$('#btn').click(function() {
    $.getJSON(API)
    .done(function(data) {
        $('#photo').attr('src', data.file)
    })
    .fail(function(err) {
        console.log(err)
    })
})
