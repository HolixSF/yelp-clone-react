import React from 'react'

import './styles.module.css'

export default class App extends React.Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <h1>
          <i className='fa fa-star'></i>
          Environment: {__NODE_ENV__}
        </h1>
      </div>
    )
  }
}
