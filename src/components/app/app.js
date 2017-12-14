import React, { Component } from 'react'
import Router from 'router/router'
import Nav from 'components/nav/nav'

export default class App extends Component {
    render () {
        return (
            <div>
                <Nav/>
                {Router()}
            </div>
        )
    }
}