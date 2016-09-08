$('form').on("submit", function(event){
	event.preventDefault();
	event.value = '';


var input = $(this).serializeArray()[0].value.split(" ").join("").toLowerCase();


	$.ajax({
		url:"https://restcountries.eu/rest/v1/alpha/" + input,
		success: function(data){
				var borders = data.borders;
				console.log(data.capital + data.name + " " + data.population);

			
	$.ajax({
		url:"https://restcountries.eu/rest/v1/name/" + input + "?fullText=true",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				console.log(data[0].borders);
				
			}
			}
		})

	}
})
})

