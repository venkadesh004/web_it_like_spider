import React from 'react'
import './LandingPage.css'

import {Logo} from "../../assets/images"
import Lottie from 'react-lottie';

import defaultOptionsForLandingPage from "../../utils/lottieConfigs";

function LandingPage({name}) {

  return (
    <div className='LandingPage' id="LandingPage">
      <div className="topBar">
        <img src={Logo} alt="" />
        <a href="/register">Register</a>
      </div>
      <div className="main-body">
        <h2>Department of Computer Science Engineering Presents</h2>
        <div className='main-topic'><h1>HACKATHON</h1><h1>CONTEST</h1></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus iusto aut quam vitae consequatur quibusdam. Officia molestias consectetur sint vitae illo nostrum fuga minus!</p>
      </div>
      <div className="mouse-scroll-animation">
        <Lottie 
          options={defaultOptionsForLandingPage[0]}
          height={90}
          width={50}
        />
      </div>
    </div>
  )
}

export default LandingPage