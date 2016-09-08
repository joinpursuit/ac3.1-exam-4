function getCountryName(code) {
    $.ajax({
      //uses the three letter code to get the country's full name
      var rootUrl1 = "https://restcountries.eu/rest/v1/alpha/",
      var input1= $("input").val().toLowerCase().split(" ").join("%20")

      url: rootUrl1 + input1,
      success: function(data){
        for (var i = 0; i < data.length; i++){
          console.log(data[0].alpha3Code());

        }
      }
    })
  }

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
    var rootUrl2= "https://restcountries.eu/rest/v1/name/" + "country" + "?fullText=true",
    url = rootUrl2 + country
    success: function(data){
      for(var j = 0; j < data.length; j++){
        console.log(data[0].name)
        console.log(data[0].capital)
        console.log(data[0].population)
        $("body").append(<span>data[0].name</span>)
        $("body").append(<span>data[0].capital</span>)
        $("body").append(<span>data[0].population</span>)
      }
    }
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    $.ajax({
        var rootUrl2 = "https://restcountries.eu/rest/v1/alpha/",
        var name = $("input").val().toLowerCase().split(" ").join("%20")

        url: rootUrl1 + name
        success: function(data){
          console.log(data)
        }
    })
  })




//When you search for a country you should receive a response that looks like:
[ {
      "name": "Argentina",
      "topLevelDomain": [
          ".ar"
      ],
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "currencies": [
          "ARS"
      ],
      "callingCodes": [
          "54"
      ],
      "capital": "Buenos Aires",
      "altSpellings": [
          "AR",
          "Argentine Republic",
          "República Argentina"
      ],
      "relevance": "0",
      "region": "Americas",
      "subregion": "South America",
      "languages": [
          "es",
          "gn"
      ],
      "translations": {
          "de": "Argentinien",
          "es": "Argentina",
          "fr": "Argentine",
          "ja": "アルゼンチン",
          "it": "Argentina"
      },
      "population": 43131966,
      "latlng": [
          -34,
          -64
      ],
      "demonym": "Argentinean",
      "area": 2780400,
      "gini": 44.5,
      "timezones": [
          "UTC−03:00"
      ],
      "borders": [
          "BOL",
          "BRA",
          "CHL",
          "PRY",
          "URY"
      ],
      "nativeName": "Argentina"
  }
]
