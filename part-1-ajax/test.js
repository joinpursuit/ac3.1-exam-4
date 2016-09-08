//LISA

$('button').click(function(event) {
    var input = $('input').val()
    $('ul').empty();
    $('input').val('');
    $('span').empty();

    console.log(input)
    var country = input
    $.ajax({
        url: 'https://www.restcountries.eu/rest/v1/name/' + country,
        success: parseData
    })


    function parseData(country) {
        var name = country[0].name;
        var cap = country[0].capital;
        var pop = country[0].population;
        var neighbor = country[0].borders;
        console.log(name, cap, pop, neighbor)
        $('.name').append(name);
        $('.cap').append(cap);
        $('.pop').append(pop);
        for (var i = 0; i < neighbor.length; i++) {
            getCountryName(neighbor[i])
        }
        //takes the country data
        //extracts the name, capital, population, and neighboring countries
        //iterates through the neighbors array to send off second AJAX request
        function getCountryName(code) {
            $.ajax({
                url: 'https://restcountries.eu/rest/v1/alpha?codes=' + neighbor[i],
                success: function logit(data) {
                    var neigh = data[0].name
                    $('ul').append('<li>' + neigh + '</li>')
                        //console.log(data[0].name)
                }
            })
        }




    }
})


// var button = document.getElementsByTagName('button')[0]
// button.addEventListener('click', function() {

//     $.ajax({

//     })
// })

// //When you search for a country you should receive a response that looks like:
// [{
//     "name": "Argentina",
//     "topLevelDomain": [
//         ".ar"
//     ],
//     "alpha2Code": "AR",
//     "alpha3Code": "ARG",
//     "currencies": [
//         "ARS"
//     ],
//     "callingCodes": [
//         "54"
//     ],
//     "capital": "Buenos Aires",
//     "altSpellings": [
//         "AR",
//         "Argentine Republic",
//         "República Argentina"
//     ],
//     "relevance": "0",
//     "region": "Americas",
//     "subregion": "South America",
//     "languages": [
//         "es",
//         "gn"
//     ],
//     "translations": {
//         "de": "Argentinien",
//         "es": "Argentina",
//         "fr": "Argentine",
//         "ja": "アルゼンチン",
//         "it": "Argentina"
//     },
//     "population": 43131966,
//     "latlng": [-34, -64],
//     "demonym": "Argentinean",
//     "area": 2780400,
//     "gini": 44.5,
//     "timezones": [
//         "UTC−03:00"
//     ],
//     "borders": [
//         "BOL",
//         "BRA",
//         "CHL",
//         "PRY",
//         "URY"
//     ],
//     "nativeName": "Argentina"
// }]
