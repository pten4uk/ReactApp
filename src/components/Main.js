import React from "react";

import WeatherNow from "./WeatherNow";
import WeatherToday from "./WeatherToday";


function Main() {
    const [date, setDate] = React.useState(getDate());
    setInterval(() => setDate(getDate()), 1000*60);
    return (
        <main>
            <section className="sity">Байбаки</section>
            <WeatherNow/>
            <section className="datetime">{date}</section>
            <WeatherToday/>
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