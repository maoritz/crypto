import Desktop from './components/Desktop'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import useWidth from './hooks/useWidth'
import CurrencyDetails from './components/CurrencyDetails'
import { Redirect } from 'react-router'
import { CurrencyContext } from './context/CurrencyContext'
import { useState } from 'react'



function App() {


  const {width} = useWidth()
  const [selectedCurrency, setSelectedCurrency] = useState()


  return (
    <div className="App">
      {width > 768 ? <Desktop /> : 
        <Router>
            <Switch>
                <CurrencyContext.Provider value={setSelectedCurrency}>
                    <Route exact path='/'> 
                        <Redirect to='/home/all-currencies'/>
                    </Route>
                    <Route path='/home' component={Home}/>
                    <Route path='/currency-details'>
                        <CurrencyDetails selectedCurrency={selectedCurrency}/>
                    </Route>
                </CurrencyContext.Provider>
            </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
