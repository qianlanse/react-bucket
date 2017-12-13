import React, { Component } from 'react'

import './index.sass'
import cart from './cart.png'
export default class extends Component {
    render () {
        return (
            <div className="container">
                hello home page
                <img src={cart} alt="cart"/>
            </div>
        )
    }
}