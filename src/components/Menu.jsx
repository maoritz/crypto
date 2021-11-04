import './menu.css'
import React from 'react'
import {NavLink} from 'react-router-dom'
import MarketStatus from './MarketStatus'

const Menu = ({marketValue}) => {

    return (
            <div className="menu">
                <img className='logo' src="logo.png" alt="Logo" />
                <MarketStatus value={marketValue} />
                <div className='main-nav'>
                    <NavLink className='nav-item' activeClassName='active' to='/all-currencies'>All Currencies</NavLink>
                    <NavLink className='nav-item' activeClassName='active' to='/tracked-currencies'>Tracked Currencies</NavLink>
                </div>
            </div>
    )
}

export default Menu
