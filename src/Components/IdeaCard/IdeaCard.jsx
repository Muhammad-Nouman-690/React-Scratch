import React from 'react';
import '../IdeaCard/IdeaCard.css';
import ImgCard from '../../assets/card1.jpg'

const IdeaCard = () => {
    return(
        <div className=' text-center'>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-md-6">
                    <div className="card" >
  <img className="card-img-top" src={ImgCard} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="card" >
  <img className="card-img-top" src={ImgCard} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                            </div>
                            <div className="col-md-12">
                            <div className="card" >
  <img className="card-img-top" src={ImgCard} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                        <div className="col-md-12">
                        <div className="card" >
  <img className="card-img-top" src={ImgCard} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                        </div>
                        <div className="col-md-12">
                        <div className="card" >
  <img className="card-img-top" src={ImgCard} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default IdeaCard;