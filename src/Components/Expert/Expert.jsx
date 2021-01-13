import React from 'react';
import '../Expert/Expert.css'
import { FaPhoneAlt } from 'react-icons/fa';


const Expert = () => {
    return (
        <div >
            <h2 className='main-expert'>Talk to a Wedding Expert for Free</h2>
            <span className='text-expert'>We're here to help! All 7 days - 9am to 8pm</span>
            <a href="#" className='link-expert'><FaPhoneAlt className='icon-expert' />Call 346-311-2269</a>
        </div>
    );
}

export default Expert;