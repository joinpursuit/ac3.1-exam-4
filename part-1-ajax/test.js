function getCountryName(code) {
    $.ajax({
     
      url:'https://restcountries.eu/rest/v1/name/?fullText=true'
      success: function(data){
        var code = data.Countries.url
      }
      }
    })
  }

  function parseData(country) {
    
    var nation = data.Countries
    for(var i = 0; i < nation.length; i++){
      getCountryName(nation[i])
    }
  }
  var input = $(this).serializeArray()[0].value
  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){

    $.ajax({
      url:'https://restcountries.eu/rest/v1/alpha/co'
      success: function(data){
        var geo = document.createElement('li')
        $('ul').append(geo)
      }

    
    })
  })


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
