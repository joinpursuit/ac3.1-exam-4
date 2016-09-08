$('button').on('click', function() { //-----[001] BEGIN SEARCH BUTTON EVENT LISTENER-----//
  
  //Capture the input and save as a variable. 
  var input = $('input').val().split(' ').join('%20')
  console.log(input)

  //Empty the value of the input field.
  $('input').val("")

  //Save the root url as a variable.
  var firstUrl = 'https://restcountries.eu/rest/v1/name/';
  
  

  //First AJAX call for country data.
  $.ajax ({ //-----[002] BEGIN AJAX CALL-----//
    
    url: firstUrl + input,

    success: function (data) {//-----[003] BEGIN SUCCESS FUNCTION-----//
      console.log(data);

      //Empty the previous value & append the country to the html
      $('.name').empty();
      $('.name').append(data[0].name);

      //Empty the previous value & append the capital to the html
      $('.cap').empty();
      $('.cap').append(data[0].capital);

      //Empty the previous value & append the population to the html
      $('.pop').empty();
      $('.pop').append(data[0].population);

      //Empty the previous value & append the bordering countries to the html
      var borderingCountries = data[0].borders;

      $('.borders').empty()

      for (var i = 0 ; i < borderingCountries.length ; i++) { //-----BEGIN FOR LOOP-----//
        countryName(borderingCountries[i])
      }//-----END FOR LOOP-----//

      
    }//-----[003] END SUCCESS FUNCTION-----//

  })//-----[002] END AJAX CALL-----//





  function countryName (str) {//-----[004] BEGIN countryName FUNCTION-----//
    var rootUrl = 'https://restcountries.eu/rest/v1/alpha/';
  
    //AJAX Call
    $.ajax ({//-----[005] BEGIN AJAX CALL-----//

      url: rootUrl + str, 

      success: function (data) {//-----[006] BEGIN SUCCESS FUNCTION-----//

          console.log(data.name)
          $('.borders').append("<li>" + data.name + "</li>")


      }//-----[006] END SUCCESS FUNCTION-----//

    })//-----[005] END AJAX CALL-----//


  }//-----[004] END countryName FUNCTION-----//



}); //-----[001] END SEARCH BUTTON EVENT LISTENER-----//






// function getCountryName(code) {
//     $.ajax({
//       //uses the three letter code to get the country's full name
//       }
//     })
//   }

//   function parseData(country) {
//     //takes the country data
//     //extracts the name, capital, population, and neighboring countries
//     //iterates through the neighbors array to send off second AJAX request
//   }

//   var button = document.getElementsByTagName('button')[0]
//   button.addEventListener('click', function(){

//     $.ajax({

//     })
//   })

// //When you search for a country you should receive a response that looks like:
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
