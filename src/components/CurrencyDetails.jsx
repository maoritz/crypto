import React,{useEffect,useState} from 'react'
import './currencyDetails.css'
import { Link } from 'react-router-dom'
import {getMarketStatusFormating ,exractNumberFromPercetageString} from '../services/formatData'

const CryptoCurrency = ({selectedCurrency}) => {
    
    const [localData,setLocalData] = useState(selectedCurrency)
 
    
    useEffect(() => {
        if( selectedCurrency){
            const jsonObject =JSON.stringify(localData)
            window.localStorage.setItem("currencies_list",jsonObject)
        }

        else{
            const localStorageObejct = window.localStorage.getItem("currencies_list")
            const parsedData = JSON.parse(localStorageObejct)
            setLocalData(parsedData)
        }

        
        return () => {
            window.localStorage.removeItem("currencies_list")
        }
    }, [])

    
    return (
        
        <div className="currency-details">
            <div className="currency-bar">
                <div className="back-arrow">
                    <Link to='/home/all-currencies'>   
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Link>
                </div>
                <div className='logo-container'>
                    <img className="logo" src="logo.png" alt="logo" />
                </div>
            </div>

{      localData &&
           <div className="body">
                <ul className='name-symbol-box'>
                    <li>{localData.name}</li>
                    <li>{localData.symbol}</li>
                </ul>
                <ul className="rate-change-last-day-box">
                    <li>${localData.price}</li>
                    <li>
                        <img className="arrow" src={getMarketStatusFormating(exractNumberFromPercetageString(localData.change_24h)).imageSource} alt="arrow" />
                        <span style={{color:getMarketStatusFormating(exractNumberFromPercetageString(localData.change_24h)).textColor}}>
                                {exractNumberFromPercetageString(localData.change_24h)}%
                        </span>
                    </li>
                </ul>
            </div>
}
        </div>
    )
}

export default CryptoCurrency
