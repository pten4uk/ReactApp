import React from "react";

import WeatherTodayItem from "./WeatherTodayItem";

function WeatherToday() {
    return (
        <section className="weather-today"
                 onMouseDown={checkGrab}
                 onMouseUp={checkGrab}
                 onMouseMove={grabScroll}>
            {
                getAllDayTime().map(currentTime =>
                    <WeatherTodayItem key={currentTime} time={currentTime}/>)
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

function getAllDayTime() {
    let allDayTime = [];

    for (let i = 1; i < 24; i++) {
        if (i < 10) allDayTime.push(`0${i}:00`);
        else allDayTime.push(`${i}:00`);
    }

    return allDayTime;
}