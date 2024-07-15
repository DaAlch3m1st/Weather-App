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

async function temperature() {
  try {
    const city = document.querySelector('#cityInput');
    const cityValue = city.value.trim();
    const apiKey = '6b055f484fb6fc59adad6b10963fef35'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}`)

    console.log('Response received:', response);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // const firstItem = data.list[0];
    // const f = ''

    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  } // This is the base of the code to start, I need to get the values of the json code
};

// document.getElementById('searchCityBtn').addEventListener('click', temperature)