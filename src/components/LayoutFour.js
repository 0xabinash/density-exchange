import React from 'react';
import "./layoutFour.css";
import { Link } from 'gatsby';

const CryptoCard = (props) =>{

    const {name, tradePair, imgSrcLogo, imgAltLogo, imgSrcChart, imgAltChart, url, vol, chg, price } = props;

    return(
        <>
        <div className='layoutFour-card'>
            <div className='layoutFour-card-sec1'>
                <img src={imgSrcLogo} alt={imgAltLogo} className='btc-logo'/>
                <span className='text'>
                    <p>{name}</p>
                    <p>{tradePair}</p>
                </span>
                <img src={imgSrcChart} alt={imgAltChart} />
            </div>
            <div className='layoutFour-card-sec2'>
                <span className='text'>
                    <p>price</p>
                    <Link to={`https://coinmarketcap.com/currencies/${url}/`} target='_blank' >${price}</Link>
                </span>
                <span className='text'>
                    <p className='vol'>VOL   <span >${vol}</span></p>
                    <p className='chg'>CHG   <span>{chg}%</span></p>
                </span>
            </div>
        </div>
        </>
    )
}


const LayoutFour = () => {
  return (
    <div className='layoutFour-container'>
        <div className='layoutFour-heading'>
            <p>Explore the Markets</p> 
            <p>like it is your <span className='layoutFour-gradient-text'>Playground.</span></p>
            <p className='heading-sub-text'>Search for your favorite coins and stay ahead of the market</p>
        </div>

        <div className='layoutFour-candle-chart'>
            <img src='layoutFour-img1.png'  alt='layoutFour-img1' className='candles-buy'/>
            <img src='layoutFour-img2.png'  alt='layoutFour-img2' className='candles-sell'/>
            <img src='layoutFour-img3.png'  alt='layoutFour-img3' className='candles-reflection'/>
            <div className='crypto-cards'>
                <CryptoCard 
                    name={"Bitcoin"}
                    tradePair={"BTC/USDT"}
                    imgSrcLogo={"layoutFour-img4.png"} 
                    imgAltLogo={"btc"} 
                    imgSrcChart={"layoutFour-img5.png"} 
                    imgAltChart={"btc-chart"} 
                    url={"bitcoin"} 
                    vol={"8.5B"} 
                    chg={"23.1"} 
                    price={"25,776.80"}
                />
                <CryptoCard
                    name={"Solana"}
                    tradePair={"SOL/USDT"}
                    imgSrcLogo={"layoutFour-img6.png"} 
                    imgAltLogo={"SOL"} 
                    imgSrcChart={"layoutFour-img7.png"} 
                    imgAltChart={"SOL-chart"} 
                    url={"solana"} 
                    vol={"372.8M"} 
                    chg={"02.1"} 
                    price={"18.07"}
                />
                <CryptoCard
                    name={"Ethereum"}
                    tradePair={"ETH/USDT"}
                    imgSrcLogo={"layoutFour-img8.png"} 
                    imgAltLogo={"ETH"} 
                    imgSrcChart={"layoutFour-img9.png"} 
                    imgAltChart={"ETH-chart"} 
                    url={"ethereum"} 
                    vol={"4.1B"} 
                    chg={"12.1"} 
                    price={"1,607.11"}
                />
            </div>
        </div>

    </div>
  )
}

export default LayoutFour