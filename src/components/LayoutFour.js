import React from 'react';
import "./layoutFour.css";

const LayoutFour = () => {
  return (
    <div className='layoutFour-container'>
        <div className='layoutFour-heading'>
            <p>Explore the Markets</p> 
            <p>like it is your <span className='layoutFour-gradient-text'>Playground.</span></p>
            <p className='heading-sub-text'>Search for your favorite coins and stay ahead of the market</p>
        </div>

        <div>
            <img src=''  alt=''/>
            <img src=''  alt=''/>
            <img src=''  alt=''/>
            <div className='crypto-cards'>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>
        </div>
    </div>
  )
}

export default LayoutFour