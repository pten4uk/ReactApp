import React from "react";



function BackGround(props) {

    return (
        <div className={props.active ? "background active" : "background"}>
            <div className="shadow"/>
        </div>
    );
}

export default BackGround;


