import React, { Fragment } from "react";
import Bodyfunction from "../bodyFunction/bodyFunction";
import Contentbody from "../contentBody/contentBody";
import Maincontent from "../mainContent/mainContent";
import Navbar from "../navBar/navbar";

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Contentbody />
            <Maincontent />
            <Bodyfunction />
        </Fragment>
    )
}

export default Homepage;