import './menu.css'
import React from 'react'
import {NavLink} from 'react-router-dom'
import MarketStatus from './MarketStatus'

const Menu = ({marketValue}) => {

    return (
            <div className="menu">
                <img className='logo' src="logo.png" alt="Logo" />
                <MarketStatus value={marketValue} />
                <ul className='main-nav'>
                    <li><NavLink activeClassName='active' to='/all-currencies'>All Currencies</NavLink></li>
                    <li><NavLink activeClassName='active' to='/tracked-currencies'>Tracked Currencies</NavLink></li>
                </ul>
            </div>
    )
}

export default Menu
