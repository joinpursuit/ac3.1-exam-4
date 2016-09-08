function getCountryName(code) {
  console.log(code);
  $.ajax({
    //uses the three letter code to get the country's full name
    url: "https://restcountries.eu/rest/v1/alpha/" + code,
    success: function(data){
      console.log(data)
      $('ul').append("<li>" + data.name + "</li>");
    },
    error:function(err){
       $('.name').html('');
        $('.cap').html('');
        $('.pop').html('');
        $('ul').empty();
        $('.name').html("does not exist");
      },
    })
}


function parseData(country) {
  //takes the country data
  //extracts the name, capital, population, and neighboring countries
  //iterates through the neighbors array to send off second AJAX request
  $('.name').html('');
  $('.cap').html('');
  $('.pop').html('');
  $('ul').empty();
  console.log(country)
  var name = country.name;
  var capital = country.capital;
  var population = country.population; 
  var neighbors = country.borders;
  $('.name').html(name);
  $('.cap').html(capital);
  $('.pop').html(population);
  for (var i = 0; i < neighbors.length; i++) {
    getCountryName(neighbors[i]);
  }
}

var button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function(){
  var input = $('input').val().split(' ').join('%20');
  $('input').val('');
  $.ajax({
    url: "https://restcountries.eu/rest/v1/alpha/" + input,
    success: parseData,
    error:function(err){
       $('.name').html('');
      $('.cap').html('');
      $('.pop').html('');
      $('ul').empty();
      $('.name').html("does not exist");
    },
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
