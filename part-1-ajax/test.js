function getCountryName(code) {
    $.ajax({
      url: 'https://restcountries.eu/rest/v1/alpha/' + code,
      success: function (data){
        $('ul').append('<li>' + data.name + '</li>')
      }
      
    })
  }

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request

    $('.name').html(country[0].name);
    $('.cap').html(country[0].capital);
    $('.pop').html(country[0].population);
    
    $('ul').html('');

    country[0].borders.forEach(function(val){
      getCountryName(val);
    })

  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){

    $.ajax({
      url: 'https://restcountries.eu/rest/v1/name/' + $('input').val() + '?fullText=true',
      success: function (data){
        console.log(data)
        parseData(data);
        $('input').val('')
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
