import React from 'react';
import '../Category/Category.css'
import catOne from '../../assets/catOne.jpg'
import catTwo from '../../assets/catTwo.jpg'
import catThree from '../../assets/catThree.jpg'
import catFour from '../../assets/catFour.jpg'

const Category = () =>{
    return(
<div>
<h1 className="Real-wedd p-4">Wedding vendors by category</h1>

<div className="container">
    <div className="row">
        <div className="col cat-main">
            <a href="#" className='cat-title'>WEDDING VENUES</a>
            <ul className='cat-list'>
                <li className='cat-list-item' >Banquet Halls</li>
                <li className='cat-list-item'>Hotels</li>
                <li className='cat-list-item'>Marriage Garden</li>
                <li className='cat-list-item'>Kalyana Mandapams</li>
                <li className='cat-list-item'>Resort & Destination Weddin</li>
                <li className='cat-list-item'>Wedding Lawns & Farmhouses</li>
            </ul>
        </div>
        <div className="col cat-main">
        <a href="#" className='cat-title-second'>WEDDING VENDORS</a>
        <ul className='cat-list'>
                <li className='cat-list-item'>Catering</li>
                <li className='cat-list-item'>Wedding Invitations</li>
                <li className='cat-list-item'>Wedding Gifts</li>
                <li className='cat-list-item'>Wedding Photography</li>
                <li className='cat-list-item'>Wedding Music</li>
                <li className='cat-list-item'>Wedding Transportation</li>
            </ul>
        </div>
        <div className="col cat-main">
        <div className="Brides-cat">
            <a href="#" className='cat-bride'>BRIDES</a>
            <ul></ul>
            <a href="#" className='cat-grooms'>GROOMS</a>
            <ul></ul>
        </div>
        
        </div>
        
    </div>
</div>
<hr />
</div>
    );
}

export default Category;