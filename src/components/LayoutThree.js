import React from 'react';
import "./layoutThree.css";

const LayoutThree = () => {
  return (
    <div className='layoutThree-container'>
        <div className='layoutThree-heading'>
            <p>Trade More. <span className='layoutThree-gradient-text'>Pay Less.</span></p>
            <p>Our low Fees Supercharge Your Profits</p>
        </div>
        <div className='fees-comparison-cards'>
            <div className='item item-one'>
                <img src='layoutThree-img2.png' alt='tiles-img' className='img-background'/>
                <img src='layoutThree-img1.png' alt='cex-logo' className='logo-img-one' />
                <div className='fees-content-one'>
                    <p className='fees-num'>0.025</p>
                    <p className='fees-type'>Maker Fees</p>
                </div>
                <div className='fees-content-two'>
                    <p className='fees-num'>0.07</p>
                    <p className='fees-type'>Taker Fees</p>
                </div>
            </div>

            <div className='item item-two'>
                <img src='layoutThree-img2.png' alt='tiles-img' className='img-background' />
                <img src='layoutThree-img4.png' alt='cex-logo' className='logo-img-two' />
                <div className='fees-content-one'>
                    <p className='fees-num'>0.025</p>
                    <p className='fees-type'>Maker Fees</p>
                </div>
                <div className='fees-content-two'>
                    <p className='fees-num'>0.07</p>
                    <p className='fees-type'>Taker Fees</p>
                </div>
            </div>

            <div className='item item-three'>
                <img src='layoutThree-img2.png' alt='tiles-img' className='img-background' />
                <img src='layoutThree-img3.png' alt='cex-logo' className='logo-img-three' />
                <div className='fees-content-one'>
                    <p className='fees-num'>0.02</p>
                    <p className='fees-type'>Maker Fees</p>
                </div>
                <div className='fees-content-two'>
                    <p className='fees-num'>0.05</p>
                    <p className='fees-type'>Taker Fees</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutThree;