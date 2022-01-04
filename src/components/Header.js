import React from "react";
import {logPlugin} from "@babel/preset-env/lib/debug";

function Header(props) {
    return (
        <header>
            <h1 className={props.active ? "active": ""}>
                Байбаки
                <img src="https://cdn-icons-png.flaticon.com/512/0/619.png"
                     alt=""/>
            </h1>
        </header>
    );
}

export default Header;