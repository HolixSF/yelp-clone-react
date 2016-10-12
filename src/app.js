import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import App from './containers/App/App'
import makeRoutes from './routes'

const routes = makeRoutes()

render(<App history={browserHistory} routes={routes} />, document.getElementById('root'))
