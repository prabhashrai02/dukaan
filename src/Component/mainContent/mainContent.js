import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import Pagination from '../pagination/pagination';
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
        "Prabhash"
    ]
    
    
    let arr= slogan;
    const [size, setsize] = useState(arr.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    const lastPage = Math.ceil(arr.length / postsPerPage);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const [Hover, setHover] = useState(false);
    const [id, setid] = useState('');
    const [clicked, setclicked] = useState(false);
    const [enteredtext, setenteredtext] = useState('');
    const [search, setsearch] = useState('');
    
    const onHover = (index) => {
        setHover(!Hover);
        setid(index);
        
        if(!Hover){
            setclicked(false);
        }
    }
    
    const nextpage = () => {
        (currentPage < lastPage) ? 
        setCurrentPage(currentPage+1) : 
        setCurrentPage(currentPage);
    }
    
    const copy = (data) =>  {
        navigator.clipboard.writeText(data);
        setclicked(true);    
    }
    
    const changesearch = (event) => {
        setenteredtext(event.target.value);
        // console.log(event.target.value);
    }
    const ans = (enteredtext) =>{
        arr = [...slogan.filter(word => word.includes(enteredtext))];
        console.log(arr);

        setsearch(enteredtext);
        setsize(arr.length);
    }
    
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
                <input type="text" 
                    className="maincontent_searchbox" 
                    value={enteredtext}
                    onChange={changesearch}
                />
                <br />
                <Button className="maincontent_generate_button"
                     onClick={()=>{ans(enteredtext)}}
                
                >Generate slogans</Button>
                <div className="maincontent_line"></div>
                <br />
                <div className='maincontent_search_result'>
                    {
                        arr ? 
                        <div className='search_result'>
                            We have generated {size} slogans for "{search}"
                        </div>
                        :
                        ""
                    }
                    <Button>Download</Button>
                </div>
                <br />
                <div className="maincontent_data_box">
                    {
                        currentPosts.map((data, index) =>
                            <li key={index} onClick={()=>copy(data)} 
                                onMouseEnter={()=>onHover(index)}  
                                onMouseLeave={()=>onHover(index)}  
                                tabIndex='-3'
                            >
                                
                                <div className="maincontent_data">
                                    {data}
                                </div>

                                {
                                    Hover && index===id ? 

                                    <div className='maincontent_alert'>
                                        {clicked ? "Copied" : "Click to copy text"}
                                    </div>
                                    :
                                    <div></div>
                                }
                            </li>
                        )
                    }
                </div>
                <br />
                    <div className="maincontent_line"></div>
                <div className='maincontent_pagination'>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={slogan.length}
                        paginate={paginate}
                    />
                    <Button onClick={nextpage}>Next &gt;</Button>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Maincontent;