import React, { Component } from 'react'
import Logo from '../Assets/logo.png'

class TopNav extends Component {
    render() {
        return (
            <div className='top-nav'>
                <div>
                    <a href="#" className='top-links'>WOMEN</a>
                    <a href="#" className='top-links'>MEN</a>
                    <a href="#" className='top-links'>KIDS</a>
                </div>
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
                    </select>
                </div>
            </div>
        )
    }
}

export default TopNav