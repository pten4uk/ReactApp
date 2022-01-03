import React from "react";

import Header from "./Header";
import Main from "./Main";
import BackGround from "./BackGround";


function App() {
    return (
        <>
            <BackGround>
                <Header/>
                <Main/>
            </BackGround>
        </>
    );
}

export default App;