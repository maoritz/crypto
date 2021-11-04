import React from 'react'
import './marketStatus.css'

const MarketStatus = ({value}) => {
    let text;
    let imageSource;
    let textColor;

    if(value > 0 ){ 
        text = 'Market is up'
        imageSource = "green_arrow.png"
        textColor = '#59bb6e'
    }else{
        text = 'Market is down'
        imageSource = "red_arrow.png"
        textColor = '#DB4848'
    }

    return (
        <div>
            <div className="marketValue">
                <div>{text}</div>
                <div className="percentage-box" >
                    <img className='arrow' src={imageSource} alt="Arrow"/>
                    <span style={{color:textColor}}>{value}%</span>
                </div>
            </div>
        </div>
    )
}

export default MarketStatus
