# Assessment 04
This coding exercise will require you to use AJAX, callbacks, and jQuery to make a simple country information application.

## Countries API
[This particular API does not require a key. Yay!](http://restcountries.eu/) You will need to use the `Country Code` API call and the `Country Name Full Text` API call.

## Instructionst
### Step 1
Attach an event listener to the button. The callback registered to the event listener should send out an AJAX request for information on a country. **Every time you click the button, the input text box should also be cleared.**

### Step 2
Pass the data from the AJAX request to a callback function. You're specifically looking for the country name, capital, and population within the object passed to the callback function. **console log the data returned from the API call** Use jQuery to change the HTML of the `<span>` elements to reflect the correct information.

### Step 3
The objects returned from the API call should have a property `borders` that stores an array of three letter country codes. For example, the `borders` array for the United States would look like `["MEX", "CAN"]` representing Mexico and Canada. For each of the country codes in this `borders` array, you'll need to get the full name of the country by sending off a second AJAX request.

### Step 4
You will need a second AJAX request that retrieves the actual name of a country given a country code. For example, `MEX` needs to be converted into Mexico. The success callback should append a list item to the `<ul>` already present on the page.

### Test Cases
![India](india.png) <br> <br>
![Russia](russia.png)
