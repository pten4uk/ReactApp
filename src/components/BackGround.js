import React from "react";
import {func} from "prop-types";



function BackGround(props) {

    return (
        <div className={props.active ? "background active" : "background"}>
            <div className="shadow"/>
        </div>
    );
}

export default BackGround;


