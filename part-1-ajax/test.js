function getCountryName(code) {
  var rootURL = "https://restcountries.eu/rest/v1/alpha/" + code
    $.ajax({
      url : rootURL + code
      success: parseData
      //uses the three letter code to get the country's full name
      
    })
  }

  function parseData(country) {
    var country = country.name
    $('.name').text(country)

    var capital = country.capital
    $(.'cap').text(capital)

    var population = country.population
    $(.'pop').text(population)

    var neighbors = country.borders

    neighbors.forEach(function(country) {
      getCountryName(country)
      var li = document.createElement('li')
      li.innerHTML = country
      $('ul').append("li")
    })

    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
  }

  var button = document.getElementsByTagName('button')[0]
  var code = document.getElementsByTagName('input')[0].value
  button.addEventListener('click', function getCountryName(code){

    $.ajax({
      url: rootURL + code
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
