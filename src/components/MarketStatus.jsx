import React from 'react'
import './marketStatus.css'
import {getMarketStatusFormating} from '../services/formatData'

const MarketStatus = ({value}) => {

    const {text,imageSource,textColor} = getMarketStatusFormating(value)
    
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
