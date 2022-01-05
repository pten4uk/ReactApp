import React from "react";

function Header(props) {
    let cityName = "city" in props.weather ? props.weather.city.name : "";
    return (
        <header>
            <h1 className={props.active ? "active": ""}>
                {cityName}
                <img className="geo" src="https://cdn-icons-png.flaticon.com/512/0/619.png"
                     alt=""/>
            </h1>
            <img className="refresh"
                 src="https://img.icons8.com/ios-filled/344/available-updates.png"
                 alt=""
                 onClick={props.refresh}/>
        </header>
    );
}

export default Header;
