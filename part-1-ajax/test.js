// $('button').on('click', function(){

// })

//https://restcountries.eu/rest/v1/name/united%20states?fullText=true
// function getCountryName(code) {


//     $.ajax({
//         //uses the three letter code to get the country's full name

//         sucess: function(data) {
//             //console.log(data)
//             var name = data[0].name
//             console.log(name)
//         },
//         error: function() {
//             $('body').append('<h1>Not Found</h1>')
//         },

//     })
// }

function parseData(country) {
    //takes the country data
    //var neighbors =
        // for (var i = 0; i < neighbors.length; i++) {

        // }
    var rooturl = 'https://restcountries.eu/rest/v1/name/';
    var country = $('input').val().toLowerCase().split(' ').join('%20');
    var urlend = '?fullText=true';
    $.ajax({
        url: rooturl + country + urlend,
        success: function(data) {
          // console.log(data)
          //var name = data[0].name
          //$('.name').append(name))
        },
        error: function() {
          $('body').append('<h1>Not Found</h1>')
        },

    })
        //extracts the name, capital, population, and neighboring countries
        //iterates through the neighbors array to send off second AJAX request
}

var button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function() {
    var rooturl = 'https://restcountries.eu/rest/v1/name/';
    var country = $('input').val().toLowerCase().split(' ').join('%20');
    var urlend = '?fullText=true';
    $.ajax({
        url: rooturl + country + urlend,
        success: function(data) {
          console.log(data)
        },
        error: function() {
          $('body').append('<h1>Not Found</h1>')
        },

    })
})

//code provided/template
// function getCountryName(code) {
//   $.ajax({
//     //uses the three letter code to get the country's full name
//     }
//   })
// }

// function parseData(country) {
//   //takes the country data
//   //extracts the name, capital, population, and neighboring countries
//   //iterates through the neighbors array to send off second AJAX request
// }

// var button = document.getElementsByTagName('button')[0]
// button.addEventListener('click', function(){

//   $.ajax({

//   })
// })

