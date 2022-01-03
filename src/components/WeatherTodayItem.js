import React from "react";


function WeatherTodayItem(props) {
    return (
        <div className="weather-item">
            <p>{props.time}</p>
            <img src={getWeather("cloudy")} alt="No"/>
            <p className="temp">-7<sup>&deg;C</sup></p>
        </div>
    );
}

export default WeatherTodayItem;

function getWeather(param) {
    const weather = {
        cloudy: "https://cdn-icons-png.flaticon.com/512/365/365229.png",
        night: "https://cdn-icons-png.flaticon.com/512/365/365223.png",
        rain: "https://cdn-icons-png.flaticon.com/512/365/365226.png",
        snow: "https://cdn-icons-png.flaticon.com/512/365/365230.png",
        storm: "https://cdn-icons-png.flaticon.com/512/365/365235.png",
        sun: "https://cdn-icons-png.flaticon.com/512/365/365237.png",
        sunny_rain: "https://cdn-icons-png.flaticon.com/512/365/365225.png",
    }
    return weather[param];
}