import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from 'router/router'

if (module.hot) {
    module.hot.accept('router/router', () => {
        const rootRouter = require('router/router').default
        render(rootRouter)
    })
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.querySelector('#app')
    )
}

render(Router)