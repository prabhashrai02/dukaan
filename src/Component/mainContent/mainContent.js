import Button from '../button/button';
import './mainContent.css';

const Maincontent = () => {
    return (
        <div className="maincontent">
            <div className="maincontent_body">
                <div className="maincontent_heading">
                    Free slogan maker
                </div>
                <div className="maincontent_text">
                Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </div>
                <div className="maincontent_Search_heading">
                    Word for your slogan
                </div>
                <input type="text" className="maincontent_searchbox"/>
                <br/>
                <Button className="maincontent_generate_button">Generate slogans</Button>
            </div>
        </div>
    )
}

export default Maincontent;