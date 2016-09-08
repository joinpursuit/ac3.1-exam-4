
$('form').submit(function(event) {
  event.preventDefault()
  var input = $(this).serializeArray()[0].value
  input = input.split(" ").join("+")
  input = input + "?fullText=true"
  $('.first').val('');

  $.ajax({
  

    url: "https://restcountries.eu/rest/v1/name/" + input,
    success: function(data) {



      console.log('object return',data)



      $('#borders').append('<li>Name: '+data[0].name+'</li>');

      $('#borders').append('<li>Capital: '+data[0].capital+'</li>');

      $('#borders').append('<li>Population: '+data[0].population+'</li>');




       var  allBorders = data[0].borders;
       console.log('allBorders: ', allBorders)


     for (var i = 0; i < allBorders.length; i++) {
       
       $.ajax({

      url: "https://restcountries.eu/rest/v1/alpha/" + allBorders[i],
      success: function(data) {
         console.log('getting data back:', data)
         console.log('luis country:', data.name)

         var countryName = document.createElement('li')
          countryName.innerHTML = data.name
          $('#ul').append(countryName) 

        

      }
    })

      }
    
  }

  })
})

