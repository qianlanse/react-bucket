import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reducers from './reducers'
import promiseMiddleware from './middleware/promiseMiddleware'

const store = createStore(reducers, applyMiddleware(promiseMiddleware))

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default
        store.replaceReducer(nextCombineReducers)
    })
}

export default store