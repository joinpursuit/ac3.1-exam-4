function getCountryName(code) {
    
    
    $.ajax({
    url:"https://restcountries.eu/rest/v1/alpha/"+ code,
    success: function(data){
      var li = document.createElement("li")
      $(li).text(data.name)
       $("ul").append(li)    
     } 
         
    })

  }

  function parseData(country) {

        var population = country[0].population;
        var capital = country[0].capital; 
        var name = country[0].name;
        $(".name").text(name)  ;
        $(".cap").text(capital)  ;
        $(".pop").text(population);  
        var neighbors = []

          for (var i = 0; i < country[0].borders.length; i++) {
            neighbors.push(getCountryName(country[0].borders[i]))    
            }
            console.log(neighbors)
  }

  var button = document.getElementsByTagName('button')[0]
    

  button.addEventListener('click', function(e) {
    e.preventDefault();
    var countryName = $("input:text").val()

    $.ajax({
      url:"https://restcountries.eu/rest/v1/name/"+countryName,
      success: function(data) {
        parseData(data)

        
      

       }
    })
  
    $("input:text").val("")
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
