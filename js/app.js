// Select DOM elements
const cityInput = document.querySelector('#cityInput');
const searchCityBtn = document.querySelector('#searchCityBtn');
const changeToCelsiusBtn = document.querySelector('#changeToCelsiusBtn');
const changeToFarenheitBtn = document.querySelector('#changeToFarenheitBtn');

// Function to fetch weather data from OpenWeather API
async function fetchWeather() {
  try {
    const city = cityInput.value.trim(); // Get the input city name and trim any whitespace
    const apiKey = '6b055f484fb6fc59adad6b10963fef35'; // Your API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`); // Fetch weather data

    if (!response.ok) {
        throw new Error('Network response was not ok'); // Throw an error if the response is not okay
    }

    const data = await response.json(); // Parse the JSON data

    // Add weather icon URL
    const weatherIcon = data.list[0].weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    // Store the temperature in Kelvin for later conversion
    const kelvin = data.list[0].main.temp_max;

    // Convert temperature from Kelvin to Fahrenheit
    const fahrenheit = Math.trunc((kelvin - 273.15) * 9/5 + 32);

    // Update DOM elements with fetched data
    document.getElementById('city').textContent = city;
    document.getElementById('temperature').textContent = `${fahrenheit}°F`;
    document.getElementById('temperature').dataset.kelvin = kelvin;  // Store Kelvin temperature in data attribute
    document.getElementById('cloudCover').textContent = `${data.list[0].weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;
    document.getElementById('weatherIcon').src = iconUrl;
    
    document.querySelector('.weatherCard').style.display = 'block'; // Show the weather card
    document.querySelector('.conversion-buttons').style.display = 'flex'; // show if you want to convert to celsius 

  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors
  }
}

// Function to convert temperature to Celsius
function convertToCelsius() {
  const temperatureElement = document.getElementById('temperature');
  const kelvin = parseFloat(temperatureElement.dataset.kelvin); // Get the Kelvin temperature from the data attribute
  const celsius = Math.trunc(kelvin - 273.15); // Convert Kelvin to Celsius
  temperatureElement.textContent = `${celsius}°C`; // Update the temperature display
}

// Function to convert temperature to Fahrenheit when the user click the reset button
function convertToFarenheit() {
  const temperatureElement = document.getElementById('temperature');
  const kelvin = parseFloat(temperatureElement.dataset.kelvin); // Get the Kelvin temperature from the data attribute
  const fahrenheit = Math.trunc((kelvin - 273.15) * 9/5 + 32); // Convert Kelvin to Fahrenheit
  temperatureElement.textContent = `${fahrenheit}°F`; // Update the temperature display
}

// Event listener for the search button
searchCityBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  fetchWeather(); // Fetch weather data
});

// Event listener for the Celsius conversion button
changeToCelsiusBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  convertToCelsius(); // Convert temperature to Celsius
});

// Event listener for the Fahrenheit conversion button
changeToFarenheitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  convertToFarenheit(); // Convert temperature to Fahrenheit
});

document.getElementById('cityInput').addEventListener('input', function() {
  let value = this.value;
  if (value.length > 0) {
      this.value = value.charAt(0).toUpperCase() + value.slice(1);
  }
});