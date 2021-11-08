import Desktop from './components/Desktop'
import Menu from './components/Menu'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AllCurrencies from './components/AllCurrencies'
import TrackedCurrencies from './components/TrackedCurrencies'
import useFetch from './hooks/useFetch'
import useWidth from './hooks/useWidth'


function App() {

  const handleMarketValueData = (response) => {
    const value = Object.values(response)[0]
    const cutPercent = value.split("%")[0]
    const toNumber = Number(cutPercent)
    return toNumber
  }

  const marketValue = useFetch('https://api.sprintt.co/crypto/currencies/market_change',handleMarketValueData)
  const {width} = useWidth()

  return (
    <div className="App">
      {width > 768 ? <Desktop /> : 
        <Router>
          <Menu marketValue={marketValue} />
          <Switch >
            <Route path="/all-currencies" component={AllCurrencies} />
            <Route path="/tracked-currencies" component={TrackedCurrencies} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
