import React from "react";
import "../Banner/Banner.css";
import BannerImg from "../../assets/BannerImg.jpg";
import BannerImgOne from "../../assets/BannerImg1.jpg";
import BannerImgTwo from "../../assets/BannerImg2.jpg";

const Banner = () => {
  return (
    <div
      
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={BannerImg} className="banner-img" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={BannerImgOne} className="banner-img" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={BannerImgTwo} className="banner-img" alt="Third slide" />
        </div>
      </div>

      <div className="banner-text">
        <h1 className="slider-title">
          Discover everything you need to plan your big day
        </h1>
        <p className="slider-text">
          Search over 59000 local professionals with reviews, pricing, and more
        </p>
        <form>
          <div className="form-row">
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border"
                placeholder="Search For"
              />
            </div>
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border "
                placeholder="Where"
              />
            </div>
            <button type="button" className="btn icon-btn btn-lg m-0">
              Find
            </button>
          </div>
        </form>
        <p className="banner-para">
          Wedding Venues, Wedding Photography, Wedding Music, Bridal Jewellery,
          Wedding Invitations, Bridal Lehenga, Florists, Honeymoon
        </p>
      </div>
      
    </div>
  );
};

export default Banner;
