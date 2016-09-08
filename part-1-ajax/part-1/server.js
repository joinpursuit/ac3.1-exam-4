$("form").on("submit", function(event) {
	event.preventDefault()

	var url = "https://restcountries.eu/rest/v1/name/"
	var input = $(this).serializeArray()[0].value.split(" ").join("%20")
	var endUrl = "?fullText=true"

	$.ajax({
		url: url + input + endUrl,
		success: function (data) {
			var info = []
			for(var i = 0; i < data.length; i++) {
				info.push(data[i])
			}
			console.log(
				"Country Name:" + info[0].name + " " + 
				"Capital:" + info[0].capital + " " + 
				"Population:" + info[0].population + " " +  
				"Borders:" + info[0].borders[0] + " " + info[0].borders[1] + " " + info[0].borders[2])
			$.ajax({
				url: url + input,
				success: function (input) {
					console.log(input)
				}
			})
		}
	})
})