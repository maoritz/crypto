import useFetch from '../hooks/useFetch'
import Currency from './Currency'

const TrackedCurrencies = () => {

     const trackedCurrencies = useFetch("https://api.sprintt.co/crypto/currencies/list?tracked_only=true&limit=100&offset=0")
    
    return (
        <div>
            {trackedCurrencies && trackedCurrencies.currencies_list.map((currency) => {
               return <Currency key={currency["currency_id"]} currencyData = {currency}/>
            })}
        </div>
    )
}

export default TrackedCurrencies
