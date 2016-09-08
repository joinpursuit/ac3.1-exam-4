var button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function() {

    var input = document.getElementsByTagName('input')[0].value
    input = input.split(' ').join('%20').toLowerCase()
    console.log(input)

    $.ajax({
        url: 'https://restcountries.eu/rest/v1/name/' + input + '?fullText=true',
        success: function(data) {

            $('.name').text(data[0].name)
            $('.cap').text(data[0].capital)
            $('.pop').text(data[0].population.toLocaleString())

            var nc = data[0].borders

            $('ul').empty()

            for (var i = 0; i < nc.length; i++) {
                var bc = data[0].borders[i]
                $.ajax({
                    url: 'https://restcountries.eu/rest/v1/alpha/' + bc,
                    success: function(data) {
                        var borName = document.createTextNode(data.name)
                        var borLi = document.createElement('li')
                        borLi.appendChild(borName)
                        $('ul').append(borLi)
                    }
                })
            }


        },
        error: function(data) {
            if (data.status === 404) {
                alert('There was an error. Please select another country.')
            }
        }

    })
    $('input').val('')
})
