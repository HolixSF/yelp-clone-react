import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
import Map from 'google-maps-react'

import styles from './styles.module.css'

export default class MapComponent extends React.Component {
  render () {
    return (
      <Map google={this.props.google} className={styles.map}>
        
      </Map>
    )
  }
}
