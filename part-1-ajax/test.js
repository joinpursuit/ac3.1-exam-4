function getCountryName(code) {
  //console.log(code)
    for(var i =0; i < code.length; i++){
    $.ajax({
      url:  "https://restcountries.eu/rest/v1/alpha/" + code[i],
      success: function(data){
        //console.log(data)
        //console.log(data.name)
        var list = document.createElement('li')
        list.innerHTML = data.name
        $('ul').append(list)

        }
      })
    }
  }

  function parseData(country) {
    //console.log(country)
    var name = country[0].name
    var capital = country[0].capital
    var population = country[0].population
    var borders = country[0].borders

    var name1 = document.getElementsByClassName('name')[0]
    name1.innerHTML = name
    $('name1').append(name)

    var capital1 = document.getElementsByClassName('cap')[0]
    capital1.innerHTML = capital
    $('name1').append(capital)

    var population1 = document.getElementsByClassName('pop')[0]
    population1.innerHTML = population
    $('name1').append(population)

    getCountryName(borders)
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
  }

  
  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
  var input = document.getElementsByTagName('input')[0].value
  input = input.split(" ").join('%20')

    $.ajax({
      url: "https://restcountries.eu/rest/v1/name/" + input + "?fullText=true",
      success: function(data){
          parseData(data)
      }
    })
    input += " "
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
//       "altSpellings": [`
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

