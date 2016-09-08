


function getCountryName(code) {
  var countryCode = code[0].alpha3Code
  var countryName = code[0].name
  $('input').val('')
  $('.name').html(code[0].name)
  $('.cap').html(code[0].capital)
  $('.pop').html(code[0].population)
    $.ajax({
      url: "https://restcountries.eu/rest/v1/alpha/"+countryCode,
      success: parseData
      })
    }
  

  function parseData(country) {
    console.log(country.borders)
   for (var i = 0; i < country.borders.length; i++) {
    var  neighbors = country.borders[i]
    console.log(neighbors)
    $.ajax({
      url:"https://restcountries.eu/rest/v1/alpha/"+neighbors,
      success: neighborsList
    })
    

    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
  }
}

  function neighborsList(list){
    $('ul').append("<li>"+list.name+"</li>")
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    $('.name').empty();
    $('.cap').empty();
    $('.pop').empty();
    $('ul').empty();
    var countryName = $('input').val();

    $.ajax({url:"https://restcountries.eu/rest/v1/name/"+countryName+"?fullText=true",
      success: getCountryName
    })  
  }
)

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
