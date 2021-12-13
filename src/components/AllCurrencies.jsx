import Currency from "./Currency"
import useFetch from "../hooks/useFetch"

const AllCurrencies = () => {
    const currencies = useFetch("https://api.sprintt.co/crypto/currencies/list?limit=20&offset=0")

        return ( 
            
            <div>
                {currencies && currencies.currencies_list.map((currency) => {
                return <Currency key={currency["currency_id"]} currencyData = {currency}/>
                })}  
            </div>
    )
}

export default AllCurrencies
