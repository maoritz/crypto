import React from 'react'
import './cryptoCurrency.css'
import { Link } from 'react-router-dom'

const CryptoCurrency = () => {
    return (
        <div className="crypto-currency">
            <div className="currency-bar">
                <div className="back-arrow">
                    <Link to='/home/all-currencies'>   
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Link>
                </div>
                <img className="logo" src="logo.png" alt="logo" />
            </div>
        </div>
    )
}

export default CryptoCurrency
