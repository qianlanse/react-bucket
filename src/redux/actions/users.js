export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL'

export function getUserInfo () {
    /* return dispatch => {
        dispatch(getUserInfoRequest())
        return fetch('http://localhost:8090/api/user.json')
            .then(res => {
                return res.json()
            })
            .then(res => {
                dispatch(getUserInfoSuccess(res))
            })
            .catch(err => {
                dispatch(getUserInfoFail())
            })
    } */
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.get(`/api/user`)
        /* afterSuccess: (dispatch, getState, response) => {
            console.log(dispatch, getState, response)
            dispatch(getUserInfoSuccess(response))
        } */
    }
}

function getUserInfoRequest () {
    return {
        type: GET_USER_INFO_REQUEST
    }
}
function getUserInfoSuccess (userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo
    }
}
function getUserInfoFail () {
    return {
        type: GET_USER_INFO_FAIL
    }
}