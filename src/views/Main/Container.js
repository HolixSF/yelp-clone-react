import React from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'
import { searchNearby } from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'

export class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      places: [],
      pagination: null
    }
    this.onReady = this.onReady.bind(this)
  }

  onReady (mapProps, map) {
    const {google} = this.props
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }

    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      })
      .catch((status, result) => {

      })
  }

  render () {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const style = {
      // width: '100vw',
      // height: '50vh'
    }
    const places = this.state.places.map(place => {
      return (<div key={place.id}>{place.name}</div>)
    })

    return (
      <div style={style}>
        <Map onReady={this.onReady} google={this.props.google} visible={false}>
          <Header />
          {places}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
