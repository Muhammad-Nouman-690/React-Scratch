import React from "react";
import "../Banner/Banner.css";
import BannerImg from "../../assets/BannerImg.jpg";
import BannerImgOne from "../../assets/BannerImg1.jpg";
import BannerImgTwo from "../../assets/BannerImg2.jpg";
import { getBanner } from "../../Server/Server";


const Banner = () => {

  const banner = getBanner();  

  return (
    
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={BannerImg} className="banner-img" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={BannerImgOne} className="banner-img" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={BannerImgTwo} className="banner-img" alt="Third slide" />
        </div>
      </div>

      <div className="banner-text">
        <h1 className="slider-title">
          {banner.banner_title}
        </h1>
        <p className="slider-text">
          {banner.banner_text}
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
          {banner.banner_para}
        </p>
      </div>
      
    </div>
  );
};

export default Banner;