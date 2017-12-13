import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Bundle from './bundle'

import Home from 'bundle-loader?lazy&name=home!pages/Home'
import About from 'bundle-loader?lazy&name=about!pages/About'
import User from 'bundle-loader?lazy&name=user!pages/User'

const Loading = () => <div>Loading...</div>
const CreateComponent = component => () => (
    <Bundle load={component}>
        {
            Component => Component ? <Component /> : <Loading />
        }
    </Bundle>
)

export default  () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">介绍</Link></li>
                <li><Link to="/user">用户</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={CreateComponent(Home)}/>
                <Route path="/about" component={CreateComponent(About)}/>
                <Route path="/user" component={CreateComponent(User)}/>
            </Switch>
        </div>
    </Router>
)