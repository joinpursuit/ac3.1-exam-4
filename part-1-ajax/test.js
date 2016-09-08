$('.button').on('click', getCountry);

// CREATE THE FUNCTION
function getCountry(data) {

// PREVENT THE DEFAULT BEHAVIOR 
data.preventDefault();

// GET THE INPUT FROM THE SEARCH BOX AND LOG IT TO THE CONSOLE
var ourInput = $('.input').val();

var country = ourInput.split(' ').join('%20')

	// OKAY, NOW WE MAKE OUR FIRST AJAX CALL TO GET THE COUNTRIES
	$.ajax({
		url: "https://restcountries.eu/rest/v1/name/" + country + "?fullText=true",
		success: returnCountryCode
	})

	// APPEND THE COUNTRY NAME
	var countryName = data[0].name.toString();
	$('p').remove();
		for(i=0; i < data.length; i++) {
			var conName = document.createElement('p')
			conName.innerHTML = people
			$('.name').append(conName)
		}


	// CREATE THE GET CAPITAL NAME FUNCTION
	function getCapital(capital) {

		var capi = capital[0].capital.toString();
		// NOW, WE DO OUR FOR LOOP TO GO THROUGH THE COUNTRIES AND RETURN THE CAPITAL 
		$('p').remove();
		for(i=0; i < capital.length; i++) {
			var appendCap = document.createElement('p')
			appendCap.innerHTML = capi
			$('.cap').append(population)
		}
	}

	// CREATE THE GET POPULATION FUNCTION
	function getPopulation(population) {

		var people = population[0].population.toString();
		// console.log(people)
		// NOW, WE DO OUR FOR LOOP TO GO THROUGH THE COUNTRIES AND RETURN THE POPULATION BASED ON 
		// WHATEVER COUNTRY WE RETURN
		$('p').remove();

		for(i=0; i < population.length; i++) {
			var population = document.createElement('p')
			population.innerHTML = people
			$('.pop').append(population)
		}
	}


// //---- OKAY- NOW OUR FIRST AJAX CALL IS A SUCCESS ----

// // SO, NOW WE CREATE THE FUNCTION WHICH WE WILL CALL UPON SUCCESS OF
// // INFORMATION RETRIEVAL OF THE PRIOR INFORMATION

function returnCountryCode(retcode) {
	var countryCode = retcode[0].countryCode.toString();

// NOW, WE DO OUR SECOND AJAX CALL TO GET THE CALLING CODE OF EVERY 
// COUNTRY 

	$.ajax({
		url: 'https://restcountries.eu/rest/v1/alpha/' + countryCode,
		success: borderingNations
	})

	function borderingNations(borderCons) {
		$('p').remove();

		var borderingNations = borderCons[0].borders.toString();

		for(i=0; i < borderCons.length; i++) {
			var neighbors = document.createElement('li')
			neighbors.innerHTML = borderingNations
			$('ul').append(neighbors)
		}
		// NOW, SINCE WE HAVE THE COUNTRY CODES- WE PRINT OUT THE NEIGHBORS
	}


	}// END RETURN-COUNTRY-CODE

















}









// ----------------------------------------------------------------------------------------------------------------------------------


// // ON FORM SUBMIT, PERFORM A FUNCTION
// $('.button').on('submit', getCountry);

// // CREATE THE FUNCTION
// function getCountry(data) {

// // PREVENT THE DEFAULT BEHAVIOR 
// data.preventDefault();

// // GET THE VALUE FROM THE INPUT
// var input = $('.input').val()
// // console.log(input)

// // SPLIT AND JOIN THE INPUT
// var country = input.split(' ').join('%20');

// // OKAY, NOW WE MAKE OUR FIRST AJAX CALL
// $.ajax({
// 	url: "https://restcountries.eu/rest/v1/name/" + country + "?fullText=true",
// 	success: returnSubRegion
// })

// //---- OKAY- NOW OUR FIRST AJAX CALL IS A SUCCESS ----

// // SO, NOW WE CREATE THE FUNCTION WHICH WE WILL CALL UPON SUCCESS OF
// // INFORMATION RETRIEVAL OF THE PRIOR INFORMATION

// function returnCountryCode(retcode) {
// 	var countryCode = retcode[0].countryCode.toString();

// // NOW, WE DO OUR SECOND AJAX CALL TO GET THE CALLING CODE OF EVERY 
// // COUNTRY IN THAT SUB-REGION

// $.ajax({
// 	url: 'https://restcountries.eu/rest/v1/alpha/' + countryCode,
// 	success: borderingNations
// })



// 	}// END RETURN-COUNTRY-CODE



// }// END GET COUNTRY









