

  var button = document.getElementsByTagName('button')[0]

  button.addEventListener('click', function(event){
    event.preventDefault()
    var s = $('input').val()
    $('input').val('')
    $.ajax({
        url:'https://restcountries.eu/rest/v1/name/' + s + '?fullText=true',
        success: function(data){

          $('.name').append(data[0].name)
          $('.cap').append(data[0].capital)
          $('.pop').append(data[0].population)
          
          var borders = data[0].borders
          for(var i = 0 ; i < borders.length; i++){
            $.ajax({
              url:'https://restcountries.eu/rest/v1/alpha/' + borders[i],
              success:function(data){
                var i = document.createElement('li')
                i.innerHTML = data.name;
                $('ul').append(i)

              }
            })
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
