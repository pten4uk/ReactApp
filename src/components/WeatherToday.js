import React from "react";

import WeatherItem from "./WeatherItem";

function WeatherToday() {
    return (
        <section className="weather-today">
            <WeatherItem/>
            <WeatherItem/>
        </section>
    );
}

export default WeatherToday;