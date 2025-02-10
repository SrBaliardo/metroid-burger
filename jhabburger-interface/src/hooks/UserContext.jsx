import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('metroidburger:userData');
    return savedUserData ? JSON.parse(savedUserData) : {};
  });

  const putUserData = (userInfo) => {
    setUserData(userInfo);
    localStorage.setItem('metroidburger:userData', JSON.stringify(userInfo));
  };

  const clearUserData = () => {
    setUserData({});
    localStorage.removeItem('metroidburger:userData');
  };

  useEffect(() => {
    const loadUserData = () => {
      const clientInfo = localStorage.getItem('metroidburger:userData');
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
    loadUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await api.get(`/users/${userData.id}`);
      putUserData(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  };

  const updateUserData = async (id, updatedUserData) => {
    try {
      const response = await api.put(`/users/${id}`, updatedUserData);
      console.log('AKI EH RESPONDE', response);
      console.log('AKI EH DATA', response.data);

      putUserData(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao atuaçizar os dados do usuário:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        putUserData,
        userData,
        clearUserData,
        getUserData,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
