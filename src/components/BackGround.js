import React, {useState} from "react";


function BackGround(props) {
    let [active, setActive] = useState(false);
    const getWheelDir = (e) => e.deltaY > 0 ? setActive(true) : setActive(false);

    return (
        <div className="background" onWheel={getWheelDir}>
            {props.children}
        </div>
    );
}

export default BackGround;

