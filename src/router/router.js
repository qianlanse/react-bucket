import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Bundle from './bundle'
import Loading from 'components/loading/loading'

import Home from 'bundle-loader?lazy&name=home!pages/Home'
import About from 'bundle-loader?lazy&name=about!pages/About'
import User from 'bundle-loader?lazy&name=user!pages/User'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound'

const CreateComponent = component => () => (
    <Bundle load={component}>
        {
            Component => Component ? <Component /> : <Loading />
        }
    </Bundle>
)

export default  () => (
    <Switch>
        <Route exact path="/" component={CreateComponent(Home)}/>
        <Route path="/about" component={CreateComponent(About)}/>
        <Route path="/user" component={CreateComponent(User)}/>
        <Route component={CreateComponent(NotFound)}/>
    </Switch>
)