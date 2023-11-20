import "./styles/hero.css";
import React from 'react'

const Hero = () => {
  return (
    <div className="container-hero">
        <p>It's time to trade the,<br/> the <span className="hero-gradient-text">future.</span></p>
        <p>Trade BTC,ETH Futures With 125x Leverage And Earn Rewards</p>
        <div className="img-iphones">
            <div className="shadow"></div>
            <img src="hero2.png" alt="heroImg" />
        </div>
        
    </div>
  )
}

export default Hero;