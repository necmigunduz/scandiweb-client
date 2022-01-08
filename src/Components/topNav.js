import React, { Component } from 'react'
import Logo from '../Assets/logo.png'

class TopNav extends Component {
    render() {
        return (
            <div className='top-nav'>
                <nav>
                    <a href="#" className='top-links'><small>WOMEN</small></a>
                    <a href="#" className='top-links'><small>MEN</small></a>
                    <a href="#" className='top-links'><small>KIDS</small></a>
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