
async function getWeather() {
  const apiKey = 'API KEY'; // Replace with your OpenWeatherMap API key
  const cityName = document.querySelector('input').value;
  const weatherResult = document.getElementById('weatherResult');
  const weatherResultTitle = document.querySelector('#weatherResult h2');
  const weatherResultDesc = document.querySelector('#weatherResult p');

  // Clear previous results
  weatherResultTitle.textContent = '';
  weatherResultDesc.textContent = '';

  // Show loading message while fetching
  weatherResultTitle.textContent = 'Loading...';

  // API URL with the city name and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Handle non-200 responses (e.g., 404, city not found)
      throw new Error('City not found');
    }

    const data = await response.json();

    // Display the weather data
    weatherResultTitle.textContent = `Weather in ${data.name}`;
    weatherResultDesc.textContent = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;

    // Unhide the result section if it's hidden
    weatherResult.classList.remove('hidden');

  } catch (error) {
    // Handle errors (e.g., invalid city name)
    weatherResultTitle.textContent = 'Error';
    weatherResultDesc.textContent = 'City not found. Please try again.';
    weatherResult.classList.remove('hidden');
  }
}
// Attach the getWeather function to the button click event
document.querySelector('button').addEventListener('click', getWeather);

