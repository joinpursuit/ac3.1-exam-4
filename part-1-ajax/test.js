    function getCountryName(code) {

    $.ajax({
      //uses the three letter code to get the country's full name
      url: 'https://restcountries.eu/rest/v1/alpha?codes='+code,
     success: function(data){
      ;
      $('ul').append('<li>'+data[0].name+'</li>')}
      
      })
    }
    
  function parseData(country) {
    //takes the country data
    var conutryCode= country[0].alpha2Code
    //extracts the name, capital, population, and neighboring countries
    $('.name').text(country[0].name);
    $('.cap').text(country[0].capital);
    $('.pop').text(country[0].population);
    //iterates through the neighbors array to send off second AJAX request

    for(var i=0; i<country[0].borders.length;i++){
      getCountryName(country[0].borders[i])
    }
  }

  var button = document.getElementsByTagName('button')[0];
  
  button.addEventListener('click', function(){
      
    $('ul')[0].innerHTML='';
      var input = $('input').val();
    $.ajax({
      url: 'https://restcountries.eu/rest/v1/name/'+input,
      success: parseData
    })

    $('input').val('');

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
