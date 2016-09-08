function getCountryName(code) {
    $.ajax({
        url: 'https://restcountries.eu/rest/v1/alpha/' + code,
        success: appendBorder
            //uses the three letter code to get the country's full name
    })
}

function appendBorder(list) {
    $('ul').append('<li>' + list.name + '</li><br>')
    $('input').val('')
}

function parseData(country) {
    var fullName = country[0].name
    var capital = country[0].capital
    var population = country[0].population
    var neighbors = country[0].borders
    for (var i = 0; i < neighbors.length; i++) {
        getCountryName(neighbors[i])
    }
    $('.name').append(fullName)
    $('.cap').append(capital)
    $('.pop').append(population)

    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
}

var button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function() {
   var input = $('input').val()
    if ($('li').data()) {
        $('.name').empty()
        $('.cap').empty()
        $('.pop').empty()
        $('ul').empty()
    }
    // if (input == 'india' || input == 'India') {
    //   $('.name').append('<img src="india.png">')
    // }//lol
    $.ajax({
        url: 'https://restcountries.eu/rest/v1/name/' + input + '?fullText=true',
        success: parseData
    })
})

//When you search for a country you should receive a response that looks like:
// [ {
//       "name": "Argentina",
//       "topLevelDomain": [
//           ".ar"
//       ],
//       "alpha2Code": "AR",
//       "alpha3Code": "ARG",
//       "currencies": [
//           "ARS"
//       ],
//       "callingCodes": [
//           "54"
//       ],
//       "capital": "Buenos Aires",
//       "altSpellings": [
//           "AR",
//           "Argentine Republic",
//           "República Argentina"
//       ],
//       "relevance": "0",
//       "region": "Americas",
//       "subregion": "South America",
//       "languages": [
//           "es",
//           "gn"
//       ],
//       "translations": {
//           "de": "Argentinien",
//           "es": "Argentina",
//           "fr": "Argentine",
//           "ja": "アルゼンチン",
//           "it": "Argentina"
//       },
//       "population": 43131966,
//       "latlng": [
//           -34,
//           -64
//       ],
//       "demonym": "Argentinean",
//       "area": 2780400,
//       "gini": 44.5,
//       "timezones": [
//           "UTC−03:00"
//       ],
//       "borders": [
//           "BOL",
//           "BRA",
//           "CHL",
//           "PRY",
//           "URY"
//       ],
//       "nativeName": "Argentina"
//   }
// ]
