import React,{useEffect,useState} from 'react'
import './currencyDetails.css'
import { Link } from 'react-router-dom'
import {getMarketStatusFormating ,exractNumberFromPercetageString,trackButtonValues} from '../services/formatData'

const CryptoCurrency = ({selectedCurrency}) => {

    const [localData,setLocalData] = useState(selectedCurrency)
    const [toggle, setToggle] = useState(0)
    
    useEffect(() => {
        if( selectedCurrency){
            const jsonObject =JSON.stringify(localData)
            window.localStorage.setItem("currencies_list",jsonObject)
            setToggle(selectedCurrency.is_tracked)
        }
        else {
            const localStorageObejct = window.localStorage.getItem("currencies_list")
            const parsedData = JSON.parse(localStorageObejct)
            setLocalData(parsedData)
            setToggle(parsedData.is_tracked)
        }

        return () => {
            window.localStorage.removeItem("currencies_list")
        }
    },[])


    const onTrack = async () => {
        toggle ? setToggle(0):setToggle(1)

        const options = { 'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9' }
        const status = toggle ? "false" : "true"
        const id = localData.currency_id

           await fetch(`https://api.sprintt.co/crypto/currencies/tracked_currencies/${id}?status=${status}`, {
                method: 'POST',
                headers: options
            })
     }
 
    
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
                        <img className="arrow" 
                             src={getMarketStatusFormating(exractNumberFromPercetageString(localData.change_24h)).imageSource} 
                             alt="arrow" 
                             />
                        <span style={{color:getMarketStatusFormating(exractNumberFromPercetageString(localData.change_24h)).textColor}}>
                                {exractNumberFromPercetageString(localData.change_24h)}%
                        </span>
                    </li>
                </ul>
                <button 
                    style={{backgroundColor:trackButtonValues(toggle).backgroundColor}} 
                    className='track-button' onClick={()=>onTrack(toggle)}>
                    {trackButtonValues(toggle).text}
                </button>
            </div>
}
        </div>
    )
}

export default CryptoCurrency
