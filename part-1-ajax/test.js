$("form").submit(function(event){
	event.preventDefault()
	var countryCode = $(this).serializeArray()[0].value

	var countryName = "https://restcountries.eu/rest/v1/name/"
	var countryCodeRoot = "https://restcountries.eu/rest/v1/alpha/"

		$.ajax({
			url: countryCodeRoot + countryCode,
			success: function(data){
		console.log(data)
				var country = data.name
				var capital = data.capital
				var pop = data.population

				$('.name').append(country)
				$('.cap').append(capital)
				$('.pop').append(pop)
				
				var neighbors = data.borders

				for(var i = 0; i < neighbors.length; i++){

		$.ajax({
			url: countryCodeRoot + neighbors[i],
			success: function(data){
			var list = document.createElement('li')
			list.innerHTML = data.name
			$('ul').append(list)
				}
			})
		}
}
})
});

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
