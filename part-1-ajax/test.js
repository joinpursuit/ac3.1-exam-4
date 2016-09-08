function getCountryName(code) {
  console.log(code);
  var base = 'https://restcountries.eu/rest/v1/alpha/'
    $.ajax({
      //uses the three letter code to get the country's full name
      url: base + code,
      success: function(data){
        var countryName = data.name;
        $('ul').append('<li>' + countryName + '</li>');
      }
      
    });
  }

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    var name = country[0].name;
    var capital = country[0].capital;
    var pop = country[0].population
    var neighbors = country[0].borders;
    //add to page
    $('.name').append(name);
    $('.cap').append(capital);
    $('.pop').append(pop);
    //iterates through the neighbors array to send off second AJAX request
    for(var i = 0; i < neighbors.length; i++){
      getCountryName(neighbors[i]);
    }
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    //gets user input
    var userInput = $('input').val();
    //clears input field
    $('input').val('');
    var urlBase = 'https://restcountries.eu/rest/v1/name/'
    var tail = '?fullText=true'

    $.ajax({
      url: urlBase + userInput + tail,
      success: function(data){
        parseData(data);
      }
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
