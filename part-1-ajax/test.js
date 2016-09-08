function getCountryName(code) {
  
  var url = "https://restcountries.eu/rest/v1/name/"+ +"?fullText=true"
    $.ajax({
      url:url + neighboring[0]
      success:function(log){
        console.log(log)
      }
      error:function(data){
          if(data.status === 404){
            $('body').append('<h1>404 error Msg</h1>')
          }
        }

      
    })
  }
  var name
  var capital
  var population
  var neighboring
  function parseData(country) {
  console.log(country)
   // takes the country data
   
    name = country.alpha2Code.name
    capital = country.alpha2Code.capital
    population = country.alpha2Code.population
    for(var i = 0; i <.length;i++){
    neighboring = country.alpha2Code.borders
   }


   $(".name").append(name)
   $(".cap").append(capital)
   $('.pop').append(population)
   $('ul').append(neighboring)
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
    //Pass the data from the AJAX request to a callback function. You're specifically looking for the country name, capital, and population within the object passed to the callback function. **console log the data returned from the API call** Use jQuery to change the HTML of the `<span>` elements to reflect the correct information.
  

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
  

  var url = "https://restcountries.eu/rest/v1/alpha/col"
    $.ajax({
        url: url,
        success:parseData,
        error: function(data){
          if(data.status === 404){
            $('body').append('<h1>404 error Msg</h1>')
          }
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
