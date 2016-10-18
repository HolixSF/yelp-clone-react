import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

const RatingIcon = (props) => (<span>&#9733;</span>)

export default class Rating extends React.Component {
  render () {
    const {percentage} = this.props
    const style = {
      width: `${(percentage || 0) * 100}%`
    }
    return (
      <div className={styles.sprite}>
        <div className={styles.top} style={style}>
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
        </div>
        <div className={styles.bottom}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
      </div>
    )
  }
}

Rating.propTypes = {
  percentage: T.number
}
