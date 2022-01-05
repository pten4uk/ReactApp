import React from "react";

import Header from "./Header";
import Main from "./Main";
import BackGround from "./BackGround";
import axios from "axios";

let currentTouchY;
let refreshed = false;


function App() {
    let [active, setActive] = React.useState(false);
    document.onwheel = e => e.deltaY > 0 ? setActive(true) : setActive(false);
    document.ontouchstart = e => currentTouchY = e.touches[0].clientY;
    document.ontouchmove = e => setActive(currentTouchY <= e.touches[0].clientY);

    let [currentPosition, setPosition] = React.useState(undefined);
    window.onload = () => {
        console.log('Загружено')
        navigator.geolocation.getCurrentPosition(pos => setPosition(pos))
    };

    let [weather, setWeather] = React.useState({});
    let refresh = () => {
        if (currentPosition) {
            getWeather(
                currentPosition.coords.latitude,
                currentPosition.coords.longitude
            ).then(response => setWeather(response.data));
        }
    }
    if (!refreshed) {
        setTimeout(() => {
            refresh()
            refreshed = true;
        }, 1000);
    }
    console.log(currentPosition);
    console.log(refreshed);
    return (
        <>
            <BackGround active={active}/>
            <Header active={active} weather={weather} refresh={refresh}/>
            <Main active={active} weather={weather}/>
        </>
    );
}

export default App;


function getWeather(lat, lon) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    let params = `?lat=${lat}&lon=${lon}` +
    '&lang=ru&cnt=8&units=metric&appid=c6d1df66d8bab2f720c7e900f69db3d3'
    console.log('Произведен запрос');
    return axios.get(url+params);
}