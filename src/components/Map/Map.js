import "leaflet/dist/leaflet.css";
import style from "../../styles/Home.module.css";

import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  const markerPosition = [7.065292635066598, 125.60850799636214];

  return (
    <MapContainer
      className={style.map}
      center={markerPosition}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="bullseye map"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
