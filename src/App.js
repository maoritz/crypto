import Desktop from './components/Desktop'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import useWidth from './hooks/useWidth'
import CryptoCurrency from './components/CryptoCurrency'
import { Redirect } from 'react-router'


function App() {


  const {width} = useWidth()

  return (
    <div className="App">
      {width > 768 ? <Desktop /> : 
        <Router>
            <Switch>
                <Route exact path='/'> 
                    <Redirect to='/home/all-currencies'/>
                </Route>
                <Route path='/home' component={Home}/>
                <Route path='/crypto-currency' component={CryptoCurrency} />
            </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
