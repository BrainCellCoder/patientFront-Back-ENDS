import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '830px',
  margin: "auto",
  marginTop: "10px"
};

const center = {
  lat: 26.1646,
  lng: 91.7469
};

export const MapView = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDOrp9uR3mqtHFUZGtVdh-lQ6a7s6_bSV0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={center} />
        </>
      </GoogleMap>
  ) : <></>
}
