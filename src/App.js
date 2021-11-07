import Desktop from './components/Desktop'
import Menu from './components/Menu'
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AllCurrencies from './components/AllCurrencies'
import TrackedCurrencies from './components/TrackedCurrencies'


function App() {
  const [marketValue, setMarketValue] = useState()


  useEffect(() => {
    const fetchMarketData = async () => {
      
      const axiosOptions = {
        headers: { 'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9' }
      };

      const response = await fetch(
        'https://api.sprintt.co/crypto/currencies/market_change', axiosOptions
      );
      const data = response.json()
      return data
    }
    const get_current_market_value = async () => {
      const current_market_value = await fetchMarketData()
      const value = Object.values(current_market_value)[0]
      const cutPercent = value.split("%")[0]
      const toNumber = Number(cutPercent)

      setMarketValue(toNumber)
    }
    get_current_market_value()
  }, [])

  return (
    <div className="App">
      <Desktop />
      <Router>
        <Menu marketValue={marketValue} />
        <Switch >
          <Route path="/all-currencies" component={AllCurrencies} />
          <Route path="/tracked-currencies" component={TrackedCurrencies} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
