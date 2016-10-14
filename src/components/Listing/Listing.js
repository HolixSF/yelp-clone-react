import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Item from './Item'
import styles from './styles.module.css'

export default class Listing extends React.Component {
  render () {
    const mappedPlaces = this.props.places.map(place => {
      return (
        <Item place={place} onClick={this.props.onClick} key={place.id} />
      )
    })
    return (
      <div className={classnames(styles.container)}>
        {mappedPlaces}
      </div>
    )
  }
}
