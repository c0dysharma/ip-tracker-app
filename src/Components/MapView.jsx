import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIcon from "../icon";

const MapMarker = ({ latLong }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(latLong, 13, {
      animate: true,
    });
  }, [map, latLong]);

  return (
    <Marker icon={markerIcon} position={latLong}>
      <Popup>This is the location of your IP or domain</Popup>
    </Marker>
  );
};

const MapView = ({ latLong }) => (
  <MapContainer
    center={latLong}
    zoom={13}
    scrollWheelZoom={true}
    className="h-[calc(100vh-320px)] md:h-[calc(100vh-288px)]"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MapMarker latLong={latLong} />
  </MapContainer>
);

export default MapView;
