import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import App from './containers/App/App'

class Home extends React.Component {
  render () {
    return <div>Hello World</div>
  }
}

const routes = (
  <Router>
    <Route path='/' component={Home} />
  </Router>
)

render(<App history={browserHistory} routes={routes} />, document.getElementById('root'))
