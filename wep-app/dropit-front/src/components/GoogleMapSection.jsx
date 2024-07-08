import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from "../context/SourceContext.js"
import { DestinationContext } from '../context/DestinationContext.js';

import locationIcon from '../assets/images/location.png';
import destinationIcon from '../assets/images/destination.png';



const containerStyle = {
  width: '100%',
  height: window.innerWidth * 0.45
};





function GoogleMapSection() {


  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext)

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });

  useEffect(() => {
    if (source?.length != [] && map) {

      setCenter({
        lat: source.lat,
        lng: source.lng
      })
    }
  }, [source])

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng
      })
    }
  }, [destination])



  //const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_APIKEY;
  // const { isLoaded } = useJsApiLoader({
  // id: 'google-map-script',
  //googleMapsApiKey: googleApiKey
  //})

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: 'ff4d11015dfc5291' }}
    >
      {source.length != [] ? <Marker
        position={{ lat: source.lat, lng: source.lng }}
        icon={{
          url: locationIcon,
          scaledSize: {
            width: 20,
            height: 20
          }
        }}
      /> : null}


      {destination.length != [] ? <Marker
        position={{ lat: destination.lat, lng: destination.lng }}
        icon={{
          url: destinationIcon,
          scaledSize: {
            width: 20,
            height: 20
          }
        }}
      /> : null}

      <></>
    </GoogleMap>
  )
}

export default GoogleMapSection
