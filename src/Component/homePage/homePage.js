import './homePage.css';
import Bodyfunction from "../bodyFunction/bodyFunction";
import Contentbody from "../contentBody/contentBody";
import Maincontent from "../mainContent/mainContent";
import Navbar from "../navBar/navbar";
import Footer from '../footer/footer';
import Otherproduct from '../otherProduct/otherProduct';

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Contentbody />
            <Maincontent />
            <Bodyfunction />
            <Otherproduct />
            <Footer />
        </div>
    )
}

export default Homepage;