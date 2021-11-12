import Currency from "./Currency"
import { useState } from "react"

const AllCurrencies = () => {

    const [currencies, setCurrencies] = useState([
        {
            "change_24h": "+5.7%",
            "coin_id": 14,
            "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin.jpg",
            "name": "Bitcoin",
            "price": 56847.24,
            "symbol": "BTC",
            "volume_24h_mil": 175999.6
          },
          {
            "change_24h": "-1.2%",
            "coin_id": 13,
            "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/ethereum.jpg",
            "name": "Ethereum",
            "price": 2353.13,
            "symbol": "ETH",
            "volume_24h_mil": 175999.6
          }
    ])


    return (
        <div>
            {currencies.map((currency,index) => {
               return <Currency currencyData = {currencies[index]}/>
            })}
        </div>
    )
}

export default AllCurrencies
