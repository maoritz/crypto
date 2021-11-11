import './currency.css'

const Currency = () => {
      
    return (
        <div className='currency'>
            <div className="icon-name-symbol-box">
                <div className="coin-icon">sign</div>
                <div className='name-symbol-box'>
                    <div>Bitcoin</div>
                    <div>BTC</div>
                </div>
            </div>
            <div className="rate-box">
                <div>54,634.33</div>
                <div><img className='arrow' src="green_arrow.png" alt="arrow" /> +4.5%</div>
            </div>
        </div>
    )
}

export default Currency
