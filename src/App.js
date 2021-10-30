import Desktop from './components/Desktop'
import Menu from './components/Menu'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [marketValue, setMarketValue] = useState()

  const axiosOptions = {
    headers: {'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9'}
  };

   useEffect(() => {
    const get_current_market_value = async () => {
      const current_market_value = await fetchMarketData()
      const value = await Object.values(current_market_value)[0]
      const cutPercent = await value.split("%")[0]
      const toNumber = await Number(cutPercent)

      setMarketValue(toNumber)
    }
      get_current_market_value()
  },[])

  // Fetch Data
  const fetchMarketData = async () => {
    const response = await fetch(
      'https://api.sprintt.co/crypto/currencies/market_change',axiosOptions
    );
    const data = await response.json()
    return data
  }
  
  return (
    <div className="App">
      <Desktop />
      <Menu marketValue={marketValue}/>
    </div>
  );
}

export default App;
