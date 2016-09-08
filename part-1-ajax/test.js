function getCountryName(code) {
    $.ajax({
      //uses the three letter code to get the country's full name
      url: 'https://restcountries.eu/rest/v1/alpha?codes=' + code,
          // console.log(data.borders[i])
      // 
    success: function print(data){
      console.log(data[0].name)

     for(var i =0; i <data.length; i++){
          var li = $('<li></li>')
          $(li).append(data[i].name)

          $('ul').append(li)
        }

    }
    
      
    })
  }

  function parseData(data) {
    //takes the country data
    //extracts the name, capital, population, and neighboring countries
    //iterates through the neighbors array to send off second AJAX request
     // console.log(data)
        console.log(data)
       
        $('.name').append(data.name)
        console.log(data.capital)
        $('.cap').append(data.capital)
        console.log(data.population)
        $('.pop').append(data.population)
        
        // for(var i =0; i <data.borders.length; i++){
        //   var li = $('<li></li>')
        //   $(li).append(data.borders[i])
        //   $('ul').append(li)
        //   console.log(data.borders[i])
          
        // }
        for(var i = 0; i< data.borders.length; i++){
          
      getCountryName(data.borders[i])
        }

  }

  var button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', function(){

    $.ajax({
      url:'https://restcountries.eu/rest/v1/alpha/' + document.getElementById('info').value,

      success: parseData
        // console.log(data)
      //   console.log(data.name)
       
      //   $('.name').append(data.name)
      //   console.log(data.capital)
      //   $('.cap').append(data.capital)
      //   console.log(data.population)
      //   $('.pop').append(data.population)
        
      //   for(var i =0; i <data.borders.length; i++){
      //     var li = $('<li></li>')
      //     $(li).append(data.borders[i])
      //     $('ul').append(li)
      //     console.log(data.borders[i])
          
      //   }


      // }
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