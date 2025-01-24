// Get DOM elements
const cityInput = document.getElementById("city");
const weatherForm = document.getElementById("weather-form");
const weatherInfo = document.getElementById("weather-info");
const alerts = document.getElementById("alerts");

const apiKey = "your_openweathermap_api_key"; // Replace with your OpenWeatherMap API key

// Event listener for the form submission
weatherForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    }
});

// Fetch weather data
async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }
        
        displayWeatherData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Display weather data
function displayWeatherData(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
    const visibility = data.visibility / 1000;  // Convert from meters to kilometers

    // Update UI
    document.getElementById("city-name").textContent = `${cityName}`;
    document.getElementById("temp").textContent = `${temp}`;
    document.getElementById("condition").textContent = condition;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("pressure").textContent = pressure;
    document.getElementById("visibility").textContent = visibility.toFixed(2);

    // Clear previous alerts
    alerts.innerHTML = "";

    // Weather alerts (optional)
    if (data.weather[0].main.toLowerCase() === "storm") {
        alerts.innerHTML = "Severe weather alert: Storm warning!";
    }
}

