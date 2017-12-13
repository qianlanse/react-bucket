import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from 'actions/counter'

class About extends Component {
    render () {
        return (
            <div>
                <p>hello about page {this.props.count}</p>
                <button onClick={this.props.increment}>INCREMENT</button>
                <button onClick={this.props.decrement}>DECREMENT</button>
                <button onClick={this.props.reset}>RESET</button>
            </div>
        )
    }
}

export default connect(state => state.counter, {increment, decrement, reset})(About)