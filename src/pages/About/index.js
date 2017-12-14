import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from 'actions/counter'
import style from './index.sass'

class About extends Component {
    render () {
        return (
            <div className={style.container}>
                <p className={style.abc}>hello about page {this.props.count}</p>
                <button onClick={this.props.increment}>INCREMENT</button>
                <button onClick={this.props.decrement}>DECREMENT</button>
                <button onClick={this.props.reset}>RESET</button>
            </div>
        )
    }
}

export default connect(state => state.counter, {increment, decrement, reset})(About)