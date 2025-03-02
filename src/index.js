import './styles.css'; 
const WeatherApp = (() => {
    const apiKey = 'ce1aa4dab9c1afc5da4594938eab9313'; 

    // Cache DOM elements (Dependency Injection for better reusability)
    const elements = {
        weatherInfo: document.querySelector('.weather-info'),
        errorMessage: document.getElementById('errorMessage'),
        cityInput: document.getElementById('cityInput'),
        loading: document.getElementById('loading'),
        cityName: document.getElementById('cityName'),
        temperature: document.getElementById('temperature'),
        weatherIcon: document.getElementById('weatherIcon'),
        weatherDesc: document.getElementById('weatherDesc'),
        humidity: document.getElementById('humidity'),
        windSpeed: document.getElementById('windSpeed'),
        pressure: document.getElementById('pressure'),
        sunTimes: document.getElementById('sunTimes'),
    };

    // Private function to fetch weather data
    async function fetchWeather(city) {
        try {
            elements.loading.style.display = 'block';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error('City not found');
            return await response.json();
        } catch (error) {
            displayError(error.message);
            return null;
        } finally {
            elements.loading.style.display = 'none';
        }
    }

    // Private function to update the UI
    function updateUI(data) {
        if (!data) return;
        elements.cityName.textContent = data.name;
        elements.temperature.textContent = `${Math.round(data.main.temp)}°C`;
        elements.weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        elements.weatherIcon.style.display = 'inline';
        elements.weatherDesc.textContent = data.weather[0].description;
        elements.humidity.textContent = `${data.main.humidity}%`;
        elements.windSpeed.textContent = `${data.wind.speed} m/s`;
        elements.pressure.textContent = `${data.main.pressure} hPa`;

        const sunrise = formatTime(data.sys.sunrise);
        const sunset = formatTime(data.sys.sunset);
        elements.sunTimes.textContent = `${sunrise} / ${sunset}`;

        elements.weatherInfo.classList.add('active');
        elements.errorMessage.style.display = 'none';
    }

    // Private function to format time
    function formatTime(timestamp) {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Private function to display error messages
    function displayError(message) {
        elements.errorMessage.textContent = message;
        elements.errorMessage.style.display = 'block';
        elements.weatherInfo.classList.remove('active');
    }

    // Public function to get weather
    async function getWeather() {
        const city = elements.cityInput.value.trim();
        if (!city) {
            displayError('Please enter a city name');
            return;
        }
        const data = await fetchWeather(city);
        updateUI(data);
    }

    // Event Listeners
    function addEventListeners() {
        document.querySelector('button').addEventListener('click', getWeather);
        elements.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') getWeather();
        });

        // Live validation for input field
        elements.cityInput.addEventListener('input', function () {
            this.style.border = this.value.trim().length > 0 ? '2px solid #4CAF50' : '2px solid #ff6b6b';
        });
    }

    // Initialize application
    function init() {
        addEventListeners();
    }

    return { init };
})();

// Initialize the app
WeatherApp.init();