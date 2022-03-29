import React, { Fragment } from "react";
import Contentbody from "../contentBody/contentBody";
import Maincontent from "../mainContent/mainContent";
import Navbar from "../navBar/navbar";

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Contentbody />
            <Maincontent />
        </Fragment>
    )
}

export default Homepage;