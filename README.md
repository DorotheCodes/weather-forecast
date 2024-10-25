WEATHER APP OVERVIEW 🌤️🌍 
The Weather App is a simple, responsive web application that allows users to check the current weather conditions in any city. By entering a city name, users receive real-time weather data, including temperature and weather conditions, powered by the OpenWeatherMap API. The app is designed to be fully responsive, with an appealing gradient background and smooth user interactions, making it visually engaging and accessible on any device.

SCREENSHOTS 📷
![weather](https://github.com/user-attachments/assets/741f26e2-e3b9-49e1-a968-2d9ef98e6453)

DEMO 🌐 
Try out the Weather App live at: https://weather-forecast123.netlify.app

FEATURES 🌟
- Real-Time Weather Data: Enter any city name to receive the latest weather conditions, with temperature, humidity, and weather status displayed.
- Responsive Design: Built to work seamlessly across mobile, tablet, and desktop devices, providing a consistent user experience.
- Error Handling: Provides user feedback when an invalid city name is entered, ensuring a smooth experience.
- Modern UI: A sleek, gradient background, clean design, and responsive layout make this app intuitive and enjoyable to use.

TECHNOLOGIES USED 💻 
HTML CSS (Responsive design using Flexbox/Grid) Vanilla JavaScript Fetch API for asynchronous data fetching OpenWeatherMap API for real-time weather information

USAGE 📝
You will need your own API key code:
1. Sign Up for OpenWeather: Go to OpenWeather and create a free account, or log in if you already have one.

2. Get Your API Key: Once logged in, find the "API keys" section in your dashboard. Click "Create" to make a new API key, then give it a name like “Weather App” for easy reference.

3. Copy the API Key: Once the key is created, it will be displayed in your account dashboard. Copy it.

4. Add the Key to Your Project
- Create an Environment File: In your project’s root folder, create a new file called .env if it doesn’t already exist.
- Store the Key Securely: Open the .env file and add your key in the format below, replacing your_api_key_here with your actual API key:
    i.e. OPENWEATHER_API_KEY=your_api_key_here
-This file keeps your API key private and out of your main code.

5. Use the Key in Your App: Your app’s JavaScript can now pull the key from this environment file.

6. Keep It Private: Never add your .env file or API key directly to GitHub. This keeps your key safe from unauthorized use.

APP USE 🌤️💻 
- Enter the name of any city in the search box.
- Press "Submit" to retrieve the latest weather information.
- The app will display the temperature, weather conditions, and more.
- If an invalid city is entered, a message will notify the user to try again.
