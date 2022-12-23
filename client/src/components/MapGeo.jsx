import Map, { Marker } from 'react-map-gl';

const MapGeo = ({ bikeDetails }) => {
  const long = bikeDetails.longitude
  const lati = bikeDetails.latitude

  return (
    <Map
      initialViewState={{
        longitude: long,
        latitude: lati,
        zoom: 14,
      }}
      style={{width: 1250, height: 480}}
      mapStyle = "mapbox://styles/nishanthmessi/clbf0tkny000j14oz0mtoc7no"
      mapboxAccessToken = {process.env.REACT_APP_MAP_TOKEN}
      >
        {/* <FullscreenControl />
        <ScaleControl /> */}
    </Map>
  )
}

export default MapGeo