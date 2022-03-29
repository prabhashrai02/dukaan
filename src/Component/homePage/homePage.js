import './homePage.css';
import Bodyfunction from "../bodyFunction/bodyFunction";
import Contentbody from "../contentBody/contentBody";
import Maincontent from "../mainContent/mainContent";
import Navbar from "../navBar/navbar";

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Contentbody />
            <Maincontent />
            <Bodyfunction />
        </div>
    )
}

export default Homepage;