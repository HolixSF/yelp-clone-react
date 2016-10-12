import React from 'react'
import { render } from 'react-dom'

import './app.css'

class App extends React.Component {
  render () {
    return (
      <div><h1>Environment: {__NODE_ENV__}</h1></div>
    )
  }
}

render(<App/>, document.getElementById('root'))
