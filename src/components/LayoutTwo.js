import React from 'react';
import "./styles/layoutTwo.css"

const LayoutTwo = () => {
  return (
    <div className='layoutTwo-container'>
        <div className='encasing encasing1'>
            <img src='layout-2-img1.png' alt='layout-2-img1'/>
            <span>
                <p>One App.</p>
                <p>Endless</p>
                <p>Possibilities</p>
            </span>
            <div className='eclipseOne'></div>
            <div className='eclipseTwo'></div>
        </div>
        
        <div className='encasing encasing2'>
            <img src='layout-2-img2.png' alt='layout-2-img2'/>
            <span>
                <p>Future Of</p>
                <p>Derivitive</p>
                <p>Trading.</p>
            </span>
            <div className='eclipseOne'></div>
            <div className='eclipseTwo'></div>
        </div>

        <div className='encasing encasing3'>
            <img src='layout-2-img3.png' alt='layout-2-img3'/>
            <span>
                <p>Is now here,</p>
                <p>for you.</p>
            </span>
            <div className='eclipseOne'></div>
            <div className='eclipseTwo'></div>
        </div>
    </div>
  )
}

export default LayoutTwo;