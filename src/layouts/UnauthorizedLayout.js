import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../auth/Login'

const UnauthorizedLayout = ({ match }) => {
  return (
    <div className="app unauthorized-layout">
      <Switch>
        <Route path="/auth" component={Login} />
      </Switch>
    </div>
  )
}

export default UnauthorizedLayout
