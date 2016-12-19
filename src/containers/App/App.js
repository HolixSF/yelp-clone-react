import React, { PropTypes as T } from 'react'
import { Router } from 'react-router'

export default class App extends React.Component {
  get content () {
    return (
      <Router history={this.props.history} routes={this.props.routes} />
    )
  }

  render () {
    return (
      <div style={ {height: '100%'} }>
        {this.content}
      </div>
    )
  }
}

App.contextTypes = {
  router: T.object
}

App.propTypes = {
  routes: T.object.isRequired,
  history: T.object.isRequired
}
