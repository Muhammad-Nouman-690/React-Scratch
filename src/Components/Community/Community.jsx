import React from 'react';
import '../Community/Community.css'
import { BsChevronRight } from "react-icons/bs";
import commOne from '../../assets/commOne.jpg'

const Community = () => {
    return(
<div className='alert'>
<div className="container">
    <div className="main-comm row">
        <div className="col">
            <h3 className='head-comm'>Community</h3>
            <p className='text-comm'>Today we're talking about...</p>
            <a href="#" className='next-link-art'>VIEW ALL DISCUSSIONS <BsChevronRight className='icon-articles' /></a>
        </div>
        
        <div className="col box-comm">
<a href="#" className='comm-title'>Wedding Hashtags</a>
<p className='comm-desc'>Hey folks, Can you please suggest a hashtag for my wedding.Bride: Roja EnguGroom: Harshit More</p>
{/* <img src={commOne} className='avatar-img' alt=""/> */}

        </div>
            
        <div className="col box-comm">
<a href="#" className='comm-title'>Custom Nath</a>
<p className='comm-desc'>Can someone help me with the vendor for custom nath with groom's name on it</p>
        </div>
        
        <div className="col box-comm">
<a href="#" className='comm-title'>Hashtag Help!</a>
<p className='comm-desc'>Hey guys! Plz suggest some hashtags for our wedding! Girl’s name is Vijaya and guy’s name is Nikhil. We are...</p>
        </div>
        
    
    </div>
</div>
</div>
    );
}

export default Community;