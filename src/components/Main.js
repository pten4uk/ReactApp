import React from "react";

import WeatherNow from "./WeatherNow";
import WeatherToday from "./WeatherToday";


function Main(props) {
    const [date, setDate] = React.useState(getDate());
    setInterval(() => setDate(getDate()), 1000*60);

    return (
        <main>
            <WeatherNow active={props.active}/>
            <section className="datetime">{date}</section>
            <WeatherToday active={props.active}/>
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