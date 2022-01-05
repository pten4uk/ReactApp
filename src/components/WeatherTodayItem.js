import React from "react";


function WeatherTodayItem(props) {
    let weather = props.weather;
    let dt = new Date(weather.dt);
    let temp = String(weather.temp).split(".")[0];
    let weatherParam = String(weather.description);

    return (
        <div className="weather-item">
            <p>{getTime(dt)}</p>
            <img src={getWeather(weatherParam)} alt="No"/>
            <p className="temp">{temp}<sup>&deg;C</sup></p>
        </div>
    );
}

export default WeatherTodayItem;

function getWeather(param) {
    const weather = {
        Clouds: "https://cdn-icons-png.flaticon.com/512/365/365229.png",
        Night: "https://cdn-icons-png.flaticon.com/512/365/365223.png",
        Rain: "https://cdn-icons-png.flaticon.com/512/365/365226.png",
        Snow: "https://cdn-icons-png.flaticon.com/512/365/365230.png",
        Storm: "https://cdn-icons-png.flaticon.com/512/365/365235.png",
        Sun: "https://cdn-icons-png.flaticon.com/512/365/365237.png",
        Sunny_rain: "https://cdn-icons-png.flaticon.com/512/365/365225.png",
    }
    return weather[param];
}

function getTime(date) {
    let hours = date.getHours();
    return hours < 10 ? `0${hours}:00` : `${hours}:00`;
}