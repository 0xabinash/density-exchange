import React from 'react';
import "./styles/layoutOne.css";

const LayoutOne = () => {
  return (
    <div className='offerings'>
        <div className='offerings-content'>
            <div className='offerings-text'>
                <p>00%</p>
                <p>Conveience Fees</p>
            </div>
            <div className='partition'></div>
            <div className='offerings-text'>
                <p>500Mn+</p>
                <p>Lifetime Volume Traded</p>
            </div>
            <div className='partition'></div>
            <div className='offerings-text'>
                <p>250+</p>
                <p>Total Trading Pairs</p>
            </div>
            <div className='partition'></div>
            <div className='offerings-text'>
                <p>15000+</p>
                <p>Traders</p>
            </div>
        </div>
    </div>
  )
}

export default LayoutOne;