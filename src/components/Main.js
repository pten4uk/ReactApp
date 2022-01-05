import React from "react";

import WeatherNow from "./WeatherNow";
import WeatherToday from "./WeatherToday";


function Main(props) {
    const [date, setDate] = React.useState(getDate());
    setInterval(() => setDate(getDate()), 1000*60);
    let weather = "list" in props.weather ? props.weather : "";
    let temp = weather ? weather.list[0].main.temp : ""
    let param = weather ? weather.list[0].weather[0].description : "";

    return (
        <main>
            <WeatherNow active={props.active} temp={temp} param={param}/>
            <section className="datetime">{date}</section>
            <WeatherToday active={props.active} weather={weather}/>
        </main>
    );
}

export default Main;


function getDate() {
    let date = new Date();
    let options = {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
    }
    return `${date.toLocaleDateString('ru', options)} `
}