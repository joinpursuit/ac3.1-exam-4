function getCountryName(code) {
  var codeURL = "https://restcountries.eu/rest/v1/alpha/";
  $.ajax({
    //uses the three letter code to get the country's full name
    url: codeURL + code ,
    success: function (data) {
        console.log(data);
        var name = data.name;
        $("ul").append("<li>" + name + "</li>");
      }
  })
}

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
    console.log(country[0]);
    var name = country[0].name;
    var capital = country[0].capital;
    // var popArr = country[0].population.toString().split('')
    // var count = 0
    // for (var i = 0; i < popArr.length; i++) {
    //   count +=1
    //   if (count === 3 && popArr[i] !== popArr[popArr.length - 1]){
    //     popArr[i]+= ", "
    //     count = 0
    //   }
    // }
    var pop = country[0].population
    var neighbors = country[0].borders;
    for (var i = 0; i < neighbors.length; i++) {
      getCountryName(neighbors[i]);
    }
    $(".name").append(name);
    $(".cap").append(capital);
    $(".pop").append(pop);
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    var rcURL = "https://restcountries.eu/rest/v1/name/"
    var input = document.getElementsByTagName('input')[0].value.split(' ').join('%20')
    var end = "?fullText=true"
    $("input").val("");
    $("span").empty();
    $("ul").empty();
    $.ajax({
      url: rcURL + input + end ,
      success: parseData,
      error: function (data) {
        if (data.status === 404) {
          alert("Country does not exist");
        }
      }

    });

  });

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
