import React, { Component } from 'react'

import style from './index.sass'
import cart from './timg.jpeg'
export default class extends Component {
    render () {
        return (
            <div className={style.container}>
                hello home page 456
                <img src={cart} alt="cart"/>
            </div>
        )
    }
}