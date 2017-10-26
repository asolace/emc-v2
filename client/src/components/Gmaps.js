import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Gmaps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 16 }
    defaultCenter={{ lat: 40.7349328, lng: -73.750258 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.7349328, lng: -73.750258 }} />}
  </GoogleMap>
))


export default Gmaps
