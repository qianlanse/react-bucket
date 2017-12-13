import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from 'actions/users'

class User extends Component {
    render () {
        const { userInfo, isLoading, errorMsg } = this.props
        return (
            <div>
                {
                    isLoading ? '请求数据中....' : 
                    (
                        errorMsg ? errorMsg : <div>
                            <p>用户名： {userInfo.name}</p>
                            <p>介绍： {userInfo.intro}</p>
                        </div>
                    )
                }
                <button onClick={this.props.getUserInfo}>请求用户信息</button>
            </div>
        )
    }
}
export default connect(state => state.users, { getUserInfo })(User)