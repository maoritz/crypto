import AllCurrencies from './AllCurrencies'
import TrackedCurrencies from './TrackedCurrencies'
import useFetch from '../hooks/useFetch'
import Menu from './Menu'
import {handleMarketValueData} from '../services/formatData'
import {Switch,Route} from 'react-router-dom'

const Home = () => {

    const marketValue = useFetch('https://api.sprintt.co/crypto/currencies/market_change',handleMarketValueData)

    return (
        <div>
            <Menu marketValue={marketValue} />
            <div className="side-gap">
                <Switch >
                    <Route path="/home/all-currencies" component={AllCurrencies} />
                    <Route path="/home/tracked-currencies" component={TrackedCurrencies} />
                </Switch>
            </div>
        </div>
    )
}

export default Home
