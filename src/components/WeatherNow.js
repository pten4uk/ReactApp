import React from "react";
import axios from "axios";


function WeatherNow(props) {

    return (
        <section className={getClassName(props, "weather-now")}>
            <span className={getClassName(props, "temp")}>-7<sup>&deg;C</sup></span>
            <span className={getClassName(props, "param")}>Облачно</span>
        </section>
    );
}

export default WeatherNow;


function getClassName(props, str) {
    return props.active ? `${str} active` : str;
}
