import React from 'react'
import { Router, Route, Redirect } from 'react-router'

class Home extends React.Component {
  render () {
    return <div>Hello World</div>
  }
}

export const makeRoutes = () => (
    <Router>
      <Route path='/' component={Home} />
      <Redirect from='*' to='/' />
    </Router>
  )

export default makeRoutes
