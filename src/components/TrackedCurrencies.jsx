import {useState} from 'react'
import Currency from './Currency'


const TrackedCurrencies = () => {
    const [trackedCurrencies,setTrackedCurrencies] = useState([
        {
        "change_24h": "-7.07%",
        "currency_id": 1,
        "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/aave.jpg",
        "is_tracked": 1,
        "name": "Aave",
        "price": 232.32,
        "symbol": "AAVE"
        },
        {
        "change_24h": "-4.02%",
        "currency_id": 14,
        "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin.jpg",
        "is_tracked": 1,
        "name": "Bitcoin",
        "price": 33653,
        "symbol": "BTC"
        } 
    ])
    return (
        <div>
            {trackedCurrencies.map((currency,index) => {
               return <Currency currencyData = {trackedCurrencies[index]}/>
            })}
        </div>
    )
}

export default TrackedCurrencies
