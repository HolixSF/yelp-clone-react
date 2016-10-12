import React, { PropTypes } from 'react'
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

App.propTypes = {
  routes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
