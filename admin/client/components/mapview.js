import React from 'react'
import {connect} from 'react-redux'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'
import GOOG_MAPS_KEY from '../../secrets'

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    let data = [
      new window.google.maps.LatLng(41.895363, -87.638836),
      new window.google.maps.LatLng(41.9, -87.63)
    ]
    // for(let i = 0; i < props.data.incidents.length; i++) {
    //   let heatMapPoint = new window.google.maps.LatLng(props.data.incidents[i].lat, props.data.indicents[i].lon)
    //   data.push(heatMapPoint)
    // }

    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: 41.895363, lng: -87.638836}}
      >
        {props.isMarkerShown && (
          <Marker position={{lat: -34.397, lng: 150.644}} />
        )}
        <HeatmapLayer data={data} />
      </GoogleMap>
    )
  })
)
class MapView extends React.Component {
  render() {
    const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOG_MAPS_KEY}&libraries=visualization,places`
    return (
      <MapComponent
        isMarkerShown
        googleMapURL={googleMapURL}
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `600px`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    )
  }
}

const mapStateToProps = ({data}) => ({data})

export default connect(mapStateToProps, null)(MapView)
