//https://restcountries.eu/rest/v1/alpha/

  // magic happens here!

  function getCountryName(code) {
    // var rooturl = 'https://restcountries.eu/rest/v1/alpha/'  
    // var input = $('input').val()
      $.ajax({
        success: function (data){
          perseData(code);
           }//end success function
      
        //uses the three letter code to get the country's full npoame
        
      })//ends ajax
    } //end of end my country

 

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
    $(".name").append(Country[0].name)
    $("ul").append('<li>' + button[0].borders+'</li>')
    $(".pop").append(button[0].population)
    $(".cap").append(button[0].capital)

  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
      var rooturl = 'https://www.restcountries.eu/rest/v1/alpha/'
      var input = $('input').val()
    $.ajax({
        url: rooturl = rooturl + input,
        success: function(country){
          var data = country;
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
