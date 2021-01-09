import React from 'react';
import Banner from '../../../assets/mehndi.jfif'

const Mehndi = () => {
    return(
        <div className=' deatil-list container'>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Banner} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Banner} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Banner} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>            

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Information about MEHNDI EVENT</h1>
    <p class="lead">It is an ideal venue to host any of your grand celebrations, They can offer you multiple event spaces in terms of their banquet hall and lawns which has the capacity to accommodate from 30 to 150 and 30 to 1000 respectively, that you can choose as per your needs, requirements and the events that you wish to host. Planning your wedding or any of its other related celebrations here will surely make it one of a kind and much more remarkable as you would be provided with best in class services and hospitality experience.</p>
  </div>
</div>

        </div>
    );
}

export default Mehndi;