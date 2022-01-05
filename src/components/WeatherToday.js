import React from "react";

import WeatherTodayItem from "./WeatherTodayItem";

function WeatherToday(props) {
    let listWeather = props.weather ? getWeatherForTime(props.weather) : [];

    return (
        <section className="weather-today"
                 onMouseDown={checkGrab}
                 onMouseUp={checkGrab}
                 onMouseMove={grabScroll}>
            {
                listWeather ? listWeather.map(weather =>
                    <WeatherTodayItem key={weather.dt}
                                      weather={weather}/>) :
                    ""
            }
        </section>
    );
}

export default WeatherToday;

let mouseDown = false;

function checkGrab(event) {
    if (event.type === 'mousedown') return mouseDown = true;
    mouseDown = false;
}

function grabScroll(event) {
    if (mouseDown) {
        event.currentTarget.scrollLeft -= event.movementX;
    }
}

function getWeatherForTime(weather) {
    let listWeather = [];
    weather.list.forEach(elem => {
        listWeather.push(
            {
                dt: elem.dt_txt,
                temp: elem.main.temp,
                description: elem.weather[0].main,
            }
        )
    })
    return listWeather;
}