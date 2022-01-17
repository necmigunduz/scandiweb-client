import React, { Component } from 'react'
import Logo from '../Assets/logo.png'
import { Link } from "react-router-dom";

class TopNav extends Component {
    render() {
        return (
            <div className='top-nav'>
                <nav className='nav-menu'>
                    <ul className='nav-menu-ul'>
                        <li><Link to="/clothes" className='top-links'><small>CLOTHES</small></a></li>
                        <li><Link to="/tect-pproducts" className='top-links'><small>TECH-PRODUCTS</small></a></li>
                    </ul>                    
                </nav>
                <div>
                <img src={Logo} alt="Logo" width="150px"/>
                </div>
                <div>
                    <select id="cars">
                        <option value="USD">$</option>
                        <option value="EURO">€</option>
                        <option value="GBP">£</option>
                        <option value="AUD"> A$</option>
                        <option value="RUB">₽</option>
                        <option value="JPY">¥</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default TopNav