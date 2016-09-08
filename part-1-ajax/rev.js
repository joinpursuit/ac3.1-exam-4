function getCountryName(code) {
    $.ajax({
      //uses the three letter code to get the country's full name
      url: "https://restcountries.eu/rest/v1/alpha/" + input,
      success: function(data){
        console.log(data)
      }
    })
  }

  function parseData(country) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){
    event.preventdefault();
    var input = $(this).serializearray()[0].value
    $.ajax({

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
