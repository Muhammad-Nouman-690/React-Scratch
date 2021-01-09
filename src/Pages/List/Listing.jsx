import React from 'react';
import '../List/Listing.css'
import Baraat from '../../assets/Baraat.jpg'
import { Link } from "react-router-dom";


const Listing = () => {
    return( 

<div class='container list_img'>

<div class='card' >
<img class='card-img-top' src={Baraat} alt='' />
  <div class='card-body'>
    <h5 class='card-title'>BARAAT EVENT</h5>
    <p class="card-text">A successful marriage requires falling in love many times, always with the same person.</p>
    
<Link type="submit" class="btn" to="/Baraat">More Details</Link>

  </div>
</div>

<div class='card' >
<img class='card-img-top' src={Baraat} alt='' />
  <div class='card-body'>
    <h5 class='card-title'>VALIMA EVENT</h5>
    <p class="card-text">A great marriage is not when the <i> perfect couple </i> comes together. ..</p>

<Link type="submit" class="btn" to="/Valima">More Details</Link>


  </div>
</div>

<div class='card' >
<img class='card-img-top' src={Baraat} alt='' />
  <div class='card-body'>
    <h5 class='card-title'>MEHNDI EVENT</h5>
    <p class="card-text">Never marry the one you can live with, marry the one you cannot live without.</p>

<Link type="submit" class="btn" to="/Mehndi">More Details</Link>


  </div>
</div>


</div>

  


    );
}

export default Listing;