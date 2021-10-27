import './menu.css'

const Menu = ({marketValue}) => {

    const marketStatus = (value,up,down) => value > 0 ? up : down

    return (
        <div className="menu">
            <img className='logo' src="logo.png" alt="Logo" />
            <div className="marketValue">
                <div>Market is {marketStatus(marketValue,'up','down')}</div>
                <div className="percentage-box" >
                    <img className='arrow' src={`${marketStatus(marketValue,'green','red')}_arrow.png`} alt="arrow"  />
                    <span style={{color:marketStatus(marketValue,'#59bb6e','#DB4848')}}>{marketValue}%</span>
                </div>
            </div>
        </div>
    )
}

export default Menu
