// my code below

// const weatherForm = document.querySelector('#submitInput')
// const cityInput = document.querySelector('#cityInput')
// const weatherCard = document.querySelector('.weatherCard')

// const city = document.getElementById('cityInput').value.toLowerCase();


// async function temperature() {
//   const apiKey = '6b055f484fb6fc59adad6b10963fef35';
//   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

//   try{
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }


//     const data = await response.json();
//     console.log(data);
//     return data;
//     // document.getElementById('humidity').textContent = data.list[0].main.humidity
//     // const humidity = data.list.main.humidity;
//     // console.log('Humidity:', humidity);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
// temperature()


// https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}

// Solve the issue of nth display in the web console
// Solve the issue of nth display in the web console
// Solve the issue of nth display in the web console
// Solve the issue of nth display in the web console


// Try to run the code on RunJs
// Try to run the code on RunJs
// Try to run the code on RunJs
// Try to run the code on RunJs
// Try to run the code on RunJs
// Try to run the code on RunJs
// Try to run the code on RunJs

const weatherForm = document.querySelector('#weatherForm');
const cityInput = document.querySelector('#cityInput');

weatherForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission default behavior
    temperature(); // Call the temperature function when the form is submitted
});

async function temperature() {
  try {
    const city = cityInput.value.trim();
    // const city = 'Belleville'
    // const cityValue = city.value.trim();
    const apiKey = '6b055f484fb6fc59adad6b10963fef35'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)

    // console.log('Response received:', response);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // Add weather icon URL
    const weatherIcon = data.list[0].weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    
   // Convert temperature from Kelvin to Fahrenheit
    const kelvin = data.list[0].main.temp_max;
    const num = (kelvin - 273.15) * 9/5 + 32;
    const farenheit = Math.trunc(num);

    document.getElementById('city').textContent = city;
    document.getElementById('temperatureFarenheit').textContent = `Temperature: ${farenheit} F`;
    document.getElementById('cloudCover').textContent = `Cloud Cover: ${data.list[0].weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;
    document.getElementById('weatherIcon').src = iconUrl;
    // document.getElementById('weatherEmoji').src = iconUrl;
    
    
    document.querySelector('.weatherCard').style.display = 'block';

    // const firstItem = data.list[0];
    // const f = ''

    // console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  } // This is the base of the code to start, I need to get the values of the json code
};

async function weatherToCelsius () {
  
}

// document.getElementById('searchCityBtn').addEventListener('click', temperature)