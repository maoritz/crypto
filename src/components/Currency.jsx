import './currency.css'
import {exractNumberFromPercetageString,getMarketStatusFormating} from '../services/formatData'
import {Link} from "react-router-dom"

const Currency = ({currencyData}) => {
    
   const {change_24h,image_url,name,price,symbol} = currencyData
   const value = exractNumberFromPercetageString(change_24h)
   const {imageSource,textColor} = getMarketStatusFormating(value)
  
    return (
        <div className="currency-cotainer">
            <Link to="/crypto-currency">
                <div className='currency'>   
                    <div className="icon-name-symbol-box">
                        <img src={image_url} alt="coin icon" />
                        <div className='name-symbol-box'>
                            <div>{name}</div>
                            <div>{symbol}</div>
                        </div>
                    </div>
                    <div className="rate-box">
                        <div>${price}</div>
                        <div style={{color:textColor}}><img className='arrow' src={imageSource} alt="arrow" />{change_24h}</div>
                    </div>
                </div>       
            </Link>
            </div>
    )
}

export default Currency
