import React from 'react'
import { render } from 'react-dom'

import styles from './styles.module.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles['container']}>Hello World</div>
    )
  }
}

render(<App/>, document.getElementById('root'))
