import React from "react";

import Header from "./Header";
import Main from "./Main";
import BackGround from "./BackGround";
import axios from "axios";

let currentTouchY;

function App() {
    let [active, setActive] = React.useState(false);
    let [weather, setWeather] = React.useState({});
    navigator.geolocation.getCurrentPosition(position => {
        getWeather(
            position.coords.latitude,
            position.coords.longitude
        ).then(r => setWeather(r.data));
    }, null, {maximumAge: 1000*60});
    console.log(weather);

    document.onwheel = e => e.deltaY > 0 ? setActive(true) : setActive(false);
    document.ontouchstart = e => currentTouchY = e.touches[0].clientY;
    document.ontouchmove = e => setActive(currentTouchY <= e.touches[0].clientY);
    return (
        <>
            <BackGround active={active}/>
            <Header active={active} weather={weather}/>
            <Main active={active} weather={weather}/>
        </>
    );
}

export default App;


function getWeather(lat, lon) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    let params = `?lat=${lat}&lon=${lon}` +
    '&lang=ru&cnt=5&units=metric&appid=c6d1df66d8bab2f720c7e900f69db3d3'
    return axios.get(url+params);
}