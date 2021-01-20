import React from 'react';
import '../WireApp/WireApp.css';
import App from '../../assets/wireApp.png';
import IOS from "../../assets/ios.png";
import ANDROID from "../../assets/android.png";


const WireApp = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://cdn1.weddingwire.in/assets/img/landings-user/icon_logo.svg" className='wire-icon' alt=""/>
                        <p className='wire-title'>Download the WeddingWire app</p>
                        <p className='wire-desc'>From venue tours to outfit fittings, get the WeddingWire app to plan your wedding events anytime, anywhere.</p>
                  <div className="row ">
                      <div className="col ">
<img src={IOS} className='down-icon' alt=""/>
<img src={ANDROID} className='down-icon' alt=""/>
                      </div>
                  </div>
                    </div>
                    <div className="col-md-6">
                        <img src={App} className='App-img' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WireApp;