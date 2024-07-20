const apiKey = '4ac471a9966aa01169ed7660c696b8db'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.99&lon=36.28&units=metric&appid=${apiKey}`;

function fetchWeather() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.humidity').innerHTML = data.main.humidity;
            document.querySelector('.pressure').innerHTML = data.main.pressure;   
            document.querySelector('.wind').innerHTML = data.wind.speed;
           
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById('weather-icon').src = iconUrl;

            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            document.querySelector('.temperature').innerHTML = `${temperature.toFixed(1)}°C`;
            document.querySelector('.temperature-feels').innerHTML = `${feelsLike.toFixed(1)}°C`;

            document.querySelector('.weather').innerHTML = data.weather[0].main;
        }); 
}

function dateUpdate() {
    const date = new Date();
    const months = [
     'Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'
    ];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    document.querySelector('.date-weather').innerHTML = date.getDate() + ' ' + months[date.getMonth()]
    document.querySelector('.time-weather').innerHTML = timeString
}

document.getElementById('refresh-button').addEventListener('click', () => {
    fetchWeather();
    dateUpdate();
});

fetchWeather();
dateUpdate()
