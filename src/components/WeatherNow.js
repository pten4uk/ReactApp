import React from "react";
import axios from "axios";


function WeatherNow(props) {
    let temp = getTemp(props.temp);
    let param = String(props.param)
    return (
        <section className={getClassName(props, "weather-now")}>
            <span className={getClassName(props, "temp")}>{temp}<sup>&deg;C</sup></span>
            <span className={getClassName(props, "param")}>{param}</span>
        </section>
    );
}

export default WeatherNow;


function getClassName(props, str) {
    return props.active ? `${str} active` : str;
}

function getTemp(temp) {
    let str = String(temp).split(".")[0];
    if (str.includes('0')) return "0";
    return str;
}
