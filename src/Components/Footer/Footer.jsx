import React from 'react';
import FooterIcon from '../../assets/footer.png'
import '../Footer/Footer.css' 
import { BsChevronDown } from "react-icons/bs";

const Footer = () => {
    return (
      <div className='footer-nav'>
<div className="wrapper">
    <div className="flert">
<div className="footer-flags">
    PAKISTAN
    <BsChevronDown className='foo-icon'/>
</div>
<img src={FooterIcon} alt=""/>
    </div>
    <div className="over-flow">
<ul className='footer-menu'>
<li className='footer-menu'>Planning Tools</li>
<li className='footer-menu' >Wedding Venues</li>
<li className='footer-menu'>Wedding Vendors</li>
<li className='footer-menu'>Brides</li>
<li className='footer-menu'>Grooms</li>
<li className='footer-menu'>Ideas</li>
<li className='footer-menu'>Community</li>
</ul>
    </div>
</div>
      </div>
    );
}

export default Footer;