import axios from 'axios'

export default store => next => action => {
    const { dispatch, getState } = store
    if (typeof action === 'function') {
        action(dispatch, getState)
        return
    }
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action
    if (!action.promise) {
        return next(action)
    }
    const [REQUEST, SUCCESS, FAILURE] = types
    next({
        ...rest,
        type: REQUEST
    })
    const onFulfilled = result => {
        next({
            ...rest,
            result,
            type: SUCCESS
        })
        if (afterSuccess) {
            afterSuccess(dispatch, getState, result)
        }
    }
    const onRejected = error => {
        next({
            ...rest,
            error,
            type: FAILURE
        })
    }

    return promise(axios)
        .then(onFulfilled, onRejected)
        .catch(error => {
            onRejected(error)
        })
}