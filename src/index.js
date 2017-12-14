import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import App from 'components/app/app'

// 模拟数据
if (MOCK) {
    require('mock/mock')
}

if (module.hot) {
    module.hot.accept('components/app/app', () => {
        const rootRouter = require('components/app/app').default
        render(rootRouter)
    })
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.querySelector('#app')
    )
}

render(App)