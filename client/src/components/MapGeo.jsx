import Map from 'react-map-gl';

const MapGeo = ({ bikeDetails }) => {
  const longitude = bikeDetails.longitude
  const latitude = bikeDetails.latitude

  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 14,
      }}
      style={{width: 1250, height: 480}}
      mapStyle = "mapbox://styles/nishanthmessi/clbf0tkny000j14oz0mtoc7no"
      mapboxAccessToken = "pk.eyJ1IjoibmlzaGFudGhtZXNzaSIsImEiOiJjbGJmMGwxczEwMW1vM3VtdjhiZmhocmE5In0.OWZSZTq4B80XyrjONTgzNw"
      >
        {/* <FullscreenControl />
        <ScaleControl /> */}
    </Map>
  )
}

export default MapGeo