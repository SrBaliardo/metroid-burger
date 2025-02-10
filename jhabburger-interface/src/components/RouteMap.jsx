import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView({ userPosition, storePosition }) {
  const map = useMap();

  useEffect(() => {
    if (userPosition && storePosition) {
      map.fitBounds([userPosition, storePosition]);
    }
  }, [userPosition, storePosition, map]);

  return null;
}

export function RouteMap({ userAddress, storeAddress }) {
  const [userPosition, setUserPosition] = useState(null);
  const [storePosition, setStorePosition] = useState(null);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    async function fetchCoordinates(address, setter) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
      );
      const data = await response.json();
      if (data.length > 0) {
        setter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    }

    fetchCoordinates(userAddress, setUserPosition);
    fetchCoordinates(storeAddress, setStorePosition);
  }, [userAddress, storeAddress]);

  useEffect(() => {
    async function fetchRoute() {
      if (!userPosition || !storePosition) return;

      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${userPosition[1]},${userPosition[0]};${storePosition[1]},${storePosition[0]}?overview=full&geometries=geojson`,
      );
      const data = await response.json();

      if (data.routes.length > 0) {
        setRoute(
          data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]),
        );
      }
    }

    fetchRoute();
  }, [userPosition, storePosition]);

  return (
    <MapContainer
      center={userPosition || [-23.5505, -46.6333]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {userPosition && <Marker position={userPosition} />}
      {storePosition && <Marker position={storePosition} />}
      {route.length > 0 && <Polyline positions={route} color="blue" />}
      <MapView userPosition={userPosition} storePosition={storePosition} />
    </MapContainer>
  );
}
