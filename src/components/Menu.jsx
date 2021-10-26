import './menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <img className='logo' src="logo.png" alt="Logo" />
            <div className="marketValue">
                <div>Market is up</div>
                <div className="percentage-box">
                    <img className='arrow' src="green_arrow.png" alt="" />
                    <span>+3.5%</span>
                </div>
            </div>
        </div>
        
    )
}

export default Menu
