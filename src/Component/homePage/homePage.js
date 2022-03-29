import React, { Fragment } from "react";
import Maincontent from "../mainContent/mainContent";
import Navbar from "../navBar/navbar";

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Maincontent />
        </Fragment>
    )
}

export default Homepage;