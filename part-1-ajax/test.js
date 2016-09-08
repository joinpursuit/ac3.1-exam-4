function getCountryName(code) {
    //uses the three letter code to get the country's full name
    $.ajax({
      url: "https://restcountries.eu/rest/v1/alpha/" + code, 
      success: function(countryInfo) {
        var neighborsName = countryInfo.name;
        $('ul').append('<li>' + neighborsName + '</li>');
      },    
    })
  }

  function parseData(country) {

    //takes the country data
    console.log(country);

    //extracts the name, capital, population, and neighboring countries
    var name = country[0].name;
    var capital = country[0].capital;
    var population = country[0].population;
    var neighbors = country[0].borders;

    //reset the neighboring countries
    $('ul').html('');

    //change the HTML elements to reflect the correct information
    $('.name').text(name);
    $('.cap').text(capital);
    $('.pop').text(population);

    //iterates through the neighbors array to send off second AJAX request
    neighbors.forEach(function(elem) {
      getCountryName(elem);
    })
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    event.preventDefault();
    var inputEl = document.querySelector('input');
    var userInput = inputEl.value;
    inputEl.value = "";
    $.ajax({
      url: "https://restcountries.eu/rest/v1/name/" + userInput + "?fullText=true",
      success: parseData, 

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
