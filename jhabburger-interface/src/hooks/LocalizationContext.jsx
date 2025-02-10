import React, { createContext, useContext, useEffect, useState } from 'react';
import { storeLocation, getDistance } from '../utils/GPS_Key';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [distanceData, setDistanceData] = useState(null);
  const [clientInfo, setClientInfo] = useState(null);

  useEffect(() => {
    const loadUserData = () => {
      const clientInfo = localStorage.getItem('metroidburger:userData');
      if (clientInfo) {
        setClientInfo(JSON.parse(clientInfo));
      }
    };
    loadUserData();
  }, []);

  useEffect(() => {
    if (!clientInfo || Object.keys(clientInfo).length === 0) {
      console.warn('⚠️ Dados do usuário não encontrados.');
      return;
    }

    if (!clientInfo.street || !clientInfo.city || !clientInfo.state) {
      console.warn('⚠️ Endereço do usuário incompleto.');
      return;
    }

    const userAddress = `${clientInfo.street}, ${clientInfo.number} - ${clientInfo.neighborhood}, ${clientInfo.city} - ${clientInfo.state}, Brasil`;

    const getingDistance = async () => {
      const distanceInfo = await getDistance(
        userAddress,
        storeLocation.storeAddress,
      );

      if (distanceInfo) {
        setDistanceData(distanceInfo);
      }
    };

    getingDistance();
  }, [clientInfo]);

  return (
    <LocationContext.Provider value={{ distanceData }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
