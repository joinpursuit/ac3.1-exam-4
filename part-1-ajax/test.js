function getCountryName(code) {
    // console.log(code);
    console.log(code.name);
    $("ul").append("<li>" + code.name + "</li>")
}

function parseData(country) {
    //takes the country data
    console.log(country);

    //extracts the name, capital, population, and neighboring countries
    var name = country[0].name;
    console.log('name: ', name)
    $(".name").text(name);

    var capital = country[0].capital;
    console.log('capital: ', capital)
    $(".cap").text(capital);
    

    var population = country[0].population;
    console.log('population: ', population)
    $(".pop").text(population);

    //iterates through the neighbors array to send off second AJAX request
    var arrNeighbors = country[0].borders;
    for (var i = 0; i < arrNeighbors.length; i++) {
        // console.log(arrNeighbors[i]);

        //https://restcountries.eu/rest/v1/alpha/col
        var root = "https://restcountries.eu/rest/v1/alpha/";
        var countryCode = arrNeighbors[i];
        var countryCodeUrl = root + countryCode;
        // console.log('countryCodeUrl: ', countryCodeUrl)

        $.ajax({
            url: countryCodeUrl,
            success: getCountryName,
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        })
    }
}

var button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function() {


    // https://restcountries.eu/rest/v1/name/aruba?fullText=true
    var root = "https://restcountries.eu/rest/v1/name/";
    // console.log('root', root)
    var input = $("input").val()
    // console.log('input', input)
    var fullText = "?fullText=true";
    // console.log('fullText', fullText);
    countryFNameUrl = root + input + fullText;
    console.log('Country Code URL: ', countryFNameUrl);

    $.ajax({
        url: countryFNameUrl,
        success: parseData,
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    })
})
