import React, {useState} from 'react';
import Button from '../button/button';
import './mainContent.css';

const Maincontent = () => {

    const slogan = [
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = slogan.slice(indexOfFirstPost, indexOfLastPost);
    
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
                <div className="maincontent_line"></div>
                <div className= "maincontent_data_box">
                    {
                        currentPosts.map((data, index) => 
                        <li key={index} className="maincontent_data">
                            {data}
                        </li>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Maincontent;