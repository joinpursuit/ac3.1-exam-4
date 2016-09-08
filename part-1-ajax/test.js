var button = document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];
var spanName = document.getElementsByClassName('name')[0];
var spanCap = document.getElementsByClassName('cap')[0];
var spanPop = document.getElementsByClassName('pop')[0];
var ul = document.getElementsByTagName('ul')[0];
var countryurlRoot = 'https://restcountries.eu/rest/v1/name/';
var codeURLRoot = 'https://restcountries.eu/rest/v1/alpha/';


// ### Step 3 + 4:
function makeAjax(arg) {
  console.log(arg);
  $.ajax({
    url: codeURLRoot + arg,
    success: function(data) {
      console.log(data);
      var borderName = data.name;
      console.log(borderName);
      console.log(ul);
      var li = document.createElement('li');
      li.innerHTML = borderName;
      ul.appendChild(li);
    }
  })
}

// ### Step 2:
function getData(arg) {
  console.log(arg);
  var name = arg[0].name;
  var capital = arg[0].capital;
  var pop = arg[0].population;
  console.log(name, capital, pop);
  spanName.innerHTML = name;
  spanCap.innerHTML = capital;
  spanPop.innerHTML = pop;
}

// ### Step 1:
  button.addEventListener('click', function(event){
    event.preventDefault();
    var value = input.value;
    input.value = '';
    ul.innerHTML = '';
    
    $.ajax({
      url: countryurlRoot + value,
      success: function(data) {
        var borders = data[0].borders;
        console.log(borders);
        getData(data);
        for(var i = 0; i < borders.length; i++) {
          makeAjax(borders[i]);
        }
      }
    })
  })


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
